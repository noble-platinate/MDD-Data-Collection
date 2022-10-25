from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import user_data
import uuid
from django.core.mail import send_mail
from django.conf import settings
from datetime import date

# Create your views here.

def index(request):
    return render(request, 'questionaire/index.html')

def demo(request):
    return render(request, 'questionaire/q4.html')

def register(request="GET"):
    if request.method == "POST":
        gender = request.POST["gender"]
        locality = request.POST["locality"]
        marital = request.POST["marital"]
        dob = request.POST["dob"]
        email = request.POST["email"]
        education = request.POST["education"]
        state = request.POST["state"]
        password = request.POST["password"]

        try:
            x = user_data.objects.get(email=email)
            return render(request, "questionaire/register.html", {
                "message": "Email already used!"
            })
        except:
            auth_token = str(uuid.uuid4())
            x = user_data(email=email, password=password, gender=gender, locality=locality,
                          marital=marital, dob=dob, state=state, education=education, auth_token=auth_token)
            x.save()

            send_mail_after_registration(email, auth_token)
            return render(request, "questionaire/login.html",{"message" : "Kindly check your mailbox to complete email verification"})
    return render(request, "questionaire/register.html")

def login(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        try:
            x=user_data.objects.get(email=email)
            try:
                x=user_data.objects.get(email=email, password=password)
                auth_token = str(uuid.uuid4())
                x.auth_token = auth_token
                x.save()
                if(x.is_verified==True):
                    if(x.consent==0):
                        return redirect(f"/consent/{auth_token}")
                    else:
                        return redirect(f"/test/{auth_token}")
                else:
                    return render(request, "questionaire/login.html", {
                        "message": "Kindly check your mailbox to complete email verification"
                    })
            except:
                return render(request, "questionaire/login.html", {
                    "message": "Invalid login credentials"
                })
        except:
            return render(request, "questionaire/login.html", {
                "message": "User does not exist, please register!"
            })
    return render(request, 'questionaire/login.html')

def consent(request, auth_token):
    try:
        x = user_data.objects.get(auth_token=auth_token)
        auth_token = str(uuid.uuid4())
        x.auth_token = auth_token
        print(auth_token)
        x.save()
        return render(request, "questionaire/consent.html",{"auth_token": auth_token})
    except:
        return render(request, 'questionaire/forbidden.html')

def test(request, auth_token):
    try:
        x = user_data.objects.get(auth_token=auth_token)
        auth_token = str(uuid.uuid4())
        x.consent=1
        x.auth_token = auth_token
        x.date_of_test = date.today()
        print(auth_token)
        x.save()
        return render(request, "questionaire/test.html",{"auth_token": auth_token})
    except:
        return render(request, 'questionaire/forbidden.html')

def q1(request, auth_token):
    try:
        x = user_data.objects.get(auth_token=auth_token)
        auth_token = str(uuid.uuid4())
        x.auth_token = auth_token
        x.save()
        return render(request, "questionaire/q1.html",{"auth_token": auth_token})
    except:
        return render(request, 'questionaire/forbidden.html')

def send_mail_after_registration(email , token):
    subject = 'Your account needs to be verified'
    message = f'Hey, kindly click on the link to verify your account https://mdd-diagnostic-test.herokuapp.com/verify/{token}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message , email_from ,recipient_list )

def send_mail_for_reset(email, password):
    subject = 'Retrieve password'
    message = f'Hey, your password is {password}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, email_from, recipient_list)

def verify(request, auth_token):
    try:
        profile_obj = user_data.objects.get(auth_token=auth_token)

        if profile_obj:
            if profile_obj.is_verified:
                return render(request, 'questionaire/login.html', {"message" : "Your email has already been verified, kindly login and proceed"})
            profile_obj.is_verified = True
            profile_obj.save()
            return render(request, 'questionaire/login.html', {"message": "Your email has been verified, kindly login and proceed"})
        else:
            return render(request, 'questionaire/login.html', {"message": "Error"})

    except Exception as e:
        print(e)
        return redirect('/')

def reset(request):
    if request.method == "POST":
        email = request.POST["email"]
        try:
            x = user_data.objects.get(email=email)
            send_mail_for_reset(email, x.password)

            return render(request, "questionaire/login.html", {"message": "Kindly check your mailbox for the password"})
        except:
            return render(request, "questionaire/reset.html", {
                "message": "Email isn't registered!"
            })
    return render(request, "questionaire/reset.html")

def q2(request,auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)
            
            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_1_time = time

            try:
                any = request.POST["any"]
                x.q_1_any = True
                try:
                    answer = request.POST["answer"]
                    x.q_1_text = answer
                except:
                    x.q_1_text = ''

                options = request.POST["options"]

                if(options == "yes"):
                    x.q_1_lasted = True
                    x.q_1_check = True
                    x.save()
                    return render(request, "questionaire/q2.html", {"result": 1, "auth_token": auth_token})
                else:
                    x.q_1_lasted = False
                    x.q_1_check = False
                    x.save()
                    return render(request, "questionaire/q2.html", {"result": 0, "auth_token": auth_token})
            except:
                x.q_1_any = False
                x.q_1_check = False
                x.save()
                return render(request, "questionaire/q2.html", {"result": 0, "auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q3(request,auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_2_time = time

            options = request.POST["options"]
            if(x.q_1_check == True):
                if(options == "yes"):
                    x.q_2_any_plus = True
                    try:
                        answer = request.POST["answer"]
                        x.q_2_text_plus = answer
                    except:
                        x.q_2_text_plus = ''

                    lasted = request.POST["lasted"]

                    if(lasted == "yes"):
                        x.q_2_lasted_plus = True
                        x.q_2_check = True
                        x.save()
                        return render(request, "questionaire/temp.html", {"auth_token": auth_token})
                    else:
                        x.q_2_lasted_plus = False
                        x.q_2_check = False
                        x.save()
                        return render(request, "questionaire/temp.html", {"auth_token": auth_token})
                else:
                    x.q_2_any_plus = False
                    x.q_2_check = False
                    x.save()
                    return render(request, "questionaire/temp.html", {"auth_token": auth_token})
            else:
                if(options == "yes"):
                    x.q_2_any_minus = True
                    try:
                        answer = request.POST["answer"]
                        x.q_2_text_minus = answer
                    except:
                        x.q_2_text_minus = ''

                    lasted = request.POST["lasted"]

                    if(lasted == "yes"):
                        x.q_2_lasted_minus = True
                        x.q_2_check = True
                        x.save()
                        return render(request, "questionaire/temp.html", {"auth_token": auth_token})
                    else:
                        x.q_2_lasted_minus = False
                        x.q_2_check = False
                        x.result_current = False
                        x.save()
                        return render(request, "questionaire/past.html", {"auth_token": auth_token})
                else:
                    x.q_2_any_minus = False
                    x.q_2_check = False
                    x.result_current = False
                    x.save()
                    return render(request, "questionaire/past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q4(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_3_time = time

            options = request.POST["options"]
            if(options == "yes"):
                    x.q_3_any = True

                    answer = request.POST["answer"]
                    x.q_3_weight = answer

                    lasted = request.POST["lasted"]

                    if(lasted == "yes"):
                        x.q_3_voluntary = True
                        x.q_3_check = False
                        x.save()
                        return render(request, "questionaire/q4.html", {"auth_token": auth_token})
                    else:
                        x.q_3_voluntary = False
                        x.q_3_check = True
                        x.save()
                        return render(request, "questionaire/q4.html", {"auth_token": auth_token})
            else:
                x.q_3_any = False
                x.q_3_check = False
                x.save()
                return render(request, "questionaire/q4.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    else:
        try:
            x = user_data.objects.get(auth_token=auth_token)
            auth_token = str(uuid.uuid4())
            x.auth_token = auth_token
            x.save()
            return render(request, "questionaire/q3.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')

def q5(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_4_time = time

            try:
                any = request.POST["any"]
                x.q_4_any = True

                x.q_4_current = request.POST["sleep1"]
                x.q_4_past = request.POST["sleep2"]

                lasted = request.POST["options"]

                if(lasted == "yes"):
                    x.q_4_lasted = True
                    x.q_4_check = True
                    x.save()
                    return render(request, "questionaire/q5.html", {"auth_token": auth_token})
                else:
                    x.q_4_lasted = False
                    x.q_4_check = False
                    x.save()
                    return render(request, "questionaire/q5.html", {"auth_token": auth_token})
            except:
                x.q_4_check = False
                x.q_4_any = False
                x.save()
                return render(request, "questionaire/q5.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q6(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_5_time = time

            try:
                any = request.POST["any"]
                x.q_5_any = True

                notice = request.POST["notice"]
                lasted = request.POST["options"]

                if(notice == "yes"):
                    x.q_5_notice = True
                else:
                    x.q_5_notice = False

                if(lasted == "yes"):
                    x.q_5_lasted = True
                    x.q_5_check = True
                    x.save()
                    return render(request, "questionaire/q6.html", {"auth_token": auth_token})
                else:
                    x.q_5_lasted = False
                    x.q_5_check = False
                    x.save()
                    return render(request, "questionaire/q6.html", {"auth_token": auth_token})
            except:
                x.q_5_any = False
                x.q_5_check = False
                x.save()
                return render(request, "questionaire/q6.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q7(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_6_time = time

            options = request.POST["options"]
            if(options == "yes"):
                x.q_6_check = True
                x.save()
                return render(request, "questionaire/q7.html", {"auth_token": auth_token})
            else:
                x.q_6_check = False
                x.save()
                return render(request, "questionaire/q7.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q8(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_7_time = time

            try:
                any = request.POST["any"]
                x.q_7_any = True

                options = request.POST["options"]
                care = request.POST["care"]

                if(care == "yes"):
                    x.q_7_care = True
                else:
                    x.q_7_care = False

                if(options == "yes"):
                    x.q_7_lasted = True
                    x.q_7_check = True
                    x.save()
                    return render(request, "questionaire/q8.html", {"auth_token": auth_token})
                else:
                    x.q_7_lasted = False
                    x.q_7_check = False
                    x.save()
                    return render(request, "questionaire/q8.html", {"auth_token": auth_token})
            except:
                x.q_7_any = False
                x.q_7_check = False
                x.save()
                return render(request, "questionaire/q8.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q9(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_8_time = time

            options2 = request.POST["options2"]
            options1 = request.POST["options1"]

            if(options1 == "no" and options2 == "no"):
                x.q_8_concentration = False
                x.q_8_decisions = False
                x.q_8_check = False
                x.save()
                return render(request, "questionaire/q9.html", {"auth_token": auth_token})

            else:
                if(options1 == "yes"):
                    x.q_8_concentration = True
                else:
                    x.q_8_concentration = False

                if(options2 == "yes"):
                    x.q_8_decisions = True
                else:
                    x.q_8_decisions = False

                try:
                    answer = request.POST["answer"]
                    x.q_8_text = answer
                except:
                    x.q_8_text = ''

                lasted = request.POST["lasted"]

                if(lasted == "yes"):
                    x.q_8_lasted = True
                    x.q_8_check = True
                    x.save()
                    return render(request, "questionaire/q9.html", {"auth_token": auth_token})
                else:
                    x.q_8_lasted = False
                    x.q_8_check = False
                    x.save()
                    return render(request, "questionaire/q9.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q10(request, auth_token):
    if request.method == "POST":
        if(1):
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_9_time = time
            if(1):
                any = request.POST["any"]
                x.q_9_any = True
                done = request.POST["done"]
                if(done == "yes"):
                    x.q_9_done = True
                    try:
                        answer = request.POST["answer"]
                        x.q_9_text = answer
                    except:
                        x.q_9_text = ''
                    plan = request.POST["plan"]
                    action = request.POST["action"]
                    attempt = request.POST["attempt"]

                    if(plan == "yes"):
                        x.q_9_plan = True
                    else:
                        x.q_9_plan = False
                    
                    if(action == "yes"):
                        x.q_9_action = True
                    else:
                        x.q_9_action = False
                    
                    if(attempt == "yes"):
                        x.q_9_attempt = True
                    else:
                        x.q_9_attempt = False
                    
                else:
                    x.q_9_done = False
                
                x.q_9_check = True
            else:
                x.q_9_any = False
                x.q_9_check = False
            l=[x.q_1_check,x.q_2_check,x.q_3_check,x.q_4_check,x.q_5_check,x.q_6_check,x.q_7_check,x.q_8_check,x.q_9_check]
            x.q_count = l.count(True)
            if(l.count(True)>=5):
                x.save()
                return render(request, "questionaire/q10.html", {"auth_token": auth_token})
            else:
                x.result_current = False
                x.save()
                return render(request, "questionaire/past.html", {"auth_token": auth_token})

        else:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')


def q11(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_10_time = time

            try:
                any = request.POST["any"]
                x.q_10_any = True
                x.q_10_check = True
                x.result_current = True
                x.save()

                return render(request, "questionaire/q11.html", {"auth_token": auth_token})
            except:
                x.q_10_any = False

                done = request.POST["done"]

                if(done == "yes"):
                    x.q_10_other = True
                    x.result_current = True
                    x.save()
                    return render(request, "questionaire/q11.html", {"auth_token": auth_token})
                else:
                    x.q_10_other = False
                    try:
                        answer = request.POST["answer"]
                        x.q_10_text = answer
                    except:
                        x.q_10_text = ''
                    x.result_current = False
                    x.save()
                    return render(request, "questionaire/past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q12(request, auth_token):
    if request.method == "POST":
        x = user_data.objects.get(auth_token=auth_token)

        auth_token = str(uuid.uuid4())

        time = request.POST["time"]
        x.auth_token = auth_token
        x.q_11_time = time
        
        when = request.POST["when"]
        x.q_11_when = when
        done = request.POST["done"]

        if(done == "yes"):
            x.q_11_ill = True
            try:
                answer = request.POST["answer"]
                x.q_11_text = answer
            except:
                x.q_11_text = ''
        else:
            x.q_11_ill = False

        meds = request.POST["meds"]

        if(meds == "yes"):
            x.q_11_meds = True
            change = request.POST["change"]

            if(change == "yes"):
                x.q_11_change = True
            else:
                x.q_11_change = False
        else:
            x.q_11_meds = False

        drugs = request.POST["drugs"]
        
        if(drugs == "yes"):
            x.q_11_drugs = True
        else:
            x.q_11_drugs = False
        
        x.save()
        return render(request, "questionaire/q12.html", {"auth_token": auth_token})
    return render(request, 'questionaire/forbidden.html')


def q13(request, auth_token):
    if request.method == "POST":

        x = user_data.objects.get(auth_token=auth_token)

        auth_token = str(uuid.uuid4())

        time = request.POST["time"]
        x.auth_token = auth_token
        x.q_12_time = time

        date = request.POST["date"]
        x.q_12_when = date
        x.save()
        return render(request, "questionaire/q13.html", {"auth_token": auth_token})
    return render(request, 'questionaire/forbidden.html')


def q14(request, auth_token):
    if request.method == "POST":

        x = user_data.objects.get(auth_token=auth_token)

        auth_token = str(uuid.uuid4())

        time = request.POST["time"]
        x.auth_token = auth_token
        x.q_13_time = time

        num = request.POST["num"]
        x.q_13_num = num
        x.save()
        return render(request, "questionaire/past.html", {"auth_token": auth_token})
    return render(request, 'questionaire/forbidden.html')

def q15(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_1_time_past = time

            try:
                any = request.POST["any"]
                x.q_1_any_past = True
                try:
                    answer = request.POST["answer"]
                    x.q_1_text_past = answer
                except:
                    x.q_1_text_past = ''

                options = request.POST["options"]

                if (options == "yes"):
                    x.q_1_lasted_past = True
                    x.q_1_check_past = True
                    x.save()
                    return render(request, "questionaire/q2_past.html", {"result": 1, "auth_token": auth_token})
                else:
                    x.q_1_lasted_past = False
                    x.q_1_check_past = False
                    x.save()
                    return render(request, "questionaire/q2_past.html", {"result": 0, "auth_token": auth_token})
            except:
                x.q_1_any_past = False
                x.q_1_check_past = False
                x.save()
                return render(request, "questionaire/q2_past.html", {"result": 0, "auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    else:
        try:
            x = user_data.objects.get(auth_token=auth_token)
            auth_token = str(uuid.uuid4())
            x.auth_token = auth_token
            x.save()
            return render(request, "questionaire/q1_past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')


def q16(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_2_time_past = time

            options = request.POST["options"]
            if (x.q_1_check_past == True):
                if (options == "yes"):
                    x.q_2_any_plus_past = True
                    try:
                        answer = request.POST["answer"]
                        x.q_2_text_plus_past = answer
                    except:
                        x.q_2_text_plus_past = ''


                    x.q_2_check_past = True
                    x.save()
                    return render(request, "questionaire/count.html", {"auth_token": auth_token})
                else:
                    x.q_2_any_plus_past = False
                    x.q_2_check_past = False
                    x.save()
                    return render(request, "questionaire/count.html", {"auth_token": auth_token})
            else:
                if (options == "yes"):
                    x.q_2_any_minus_past = True
                    try:
                        answer = request.POST["answer"]
                        x.q_2_text_minus_past = answer
                    except:
                        x.q_2_text_minus_past = ''

                    x.q_2_check_past = True
                    x.save()
                    return render(request, "questionaire/count.html", {"auth_token": auth_token})
                else:
                    x.q_2_check_past = False
                    x.result_past = False
                    x.save()
                    return render(request, "questionaire/report.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')


def q17(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.qq_3_time_past = time

            options = request.POST["options"]
            if (options == "yes"):
                x.qq_3_count_past = True
                x.save()
                return render(request, "questionaire/q3_past.html", {"auth_token": auth_token})
            else:
                x.qq_3_count_past = False
                x.save()
                return render(request, "questionaire/q3_past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')


def q18(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_3_time_past = time

            options = request.POST["options"]
            if (options == "yes"):
                x.q_3_any_past = True

                answer = request.POST["answer"]
                x.q_3_weight_past = answer

                lasted = request.POST["lasted"]

                if (lasted == "yes"):
                        x.q_3_voluntary_past = True
                        x.q_3_check_past = False
                        x.save()
                        return render(request, "questionaire/q4_past.html", {"auth_token": auth_token})
                else:
                    x.q_3_voluntary_past = False
                    x.q_3_check_past = True
                    x.save()
                    return render(request, "questionaire/q4_past.html", {"auth_token": auth_token})
            else:
                x.q_3_any_past = False
                x.q_3_check_past = False
                x.save()
                return render(request, "questionaire/q4_past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    else:
        return render(request, 'questionaire/forbidden.html')


def q19(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_4_time_past = time

            try:
                any = request.POST["any"]
                x.q_4_any_past = True

                x.q_4_current_past = request.POST["sleep1"]
                x.q_4_past_past = request.POST["sleep2"]

                lasted = request.POST["options"]

                if (lasted == "yes"):
                    x.q_4_lasted_past = True
                    x.q_4_check_past = True
                    x.save()
                    return render(request, "questionaire/q5_past.html", {"auth_token": auth_token})
                else:
                    x.q_4_lasted_past = False
                    x.q_4_check_past = False
                    x.save()
                    return render(request, "questionaire/q5_past.html", {"auth_token": auth_token})
            except:
                x.q_4_check_past = False
                x.q_4_any_past = False
                x.save()
                return render(request, "questionaire/q5_past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')


def q20(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_5_time_past = time

            try:
                any = request.POST["any"]
                x.q_5_any_past = True

                notice = request.POST["notice"]
                lasted = request.POST["options"]

                if (notice == "yes"):
                    x.q_5_notice_past = True
                else:
                    x.q_5_notice_past = False

                if (lasted == "yes"):
                    x.q_5_lasted_past = True
                    x.q_5_check_past = True
                    x.save()
                    return render(request, "questionaire/q6_past.html", {"auth_token": auth_token})
                else:
                    x.q_5_lasted_past = False
                    x.q_5_check_past = False
                    x.save()
                    return render(request, "questionaire/q6_past.html", {"auth_token": auth_token})
            except:
                x.q_5_any_past = False
                x.q_5_check_past = False
                x.save()
                return render(request, "questionaire/q6_past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')


def q21(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_6_time_past = time

            options = request.POST["options"]
            if (options == "yes"):
                x.q_6_check_past = True
                x.save()
                return render(request, "questionaire/q7_past.html", {"auth_token": auth_token})
            else:
                x.q_6_check_past = False
                x.save()
                return render(request, "questionaire/q7_past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')


def q22(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_7_time_past = time

            try:
                any = request.POST["any"]
                x.q_7_any_past = True

                options = request.POST["options"]
                care = request.POST["care"]

                if (care == "yes"):
                    x.q_7_care_past = True
                else:
                    x.q_7_care_past = False

                if (options == "yes"):
                    x.q_7_lasted_past = True
                    x.q_7_check_past = True
                    x.save()
                    return render(request, "questionaire/q8_past.html", {"auth_token": auth_token})
                else:
                    x.q_7_lasted_past = False
                    x.q_7_check_past = False
                    x.save()
                    return render(request, "questionaire/q8_past.html", {"auth_token": auth_token})
            except:
                x.q_7_any_past = False
                x.q_7_check_past = False
                x.save()
                return render(request, "questionaire/q8_past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')


def q23(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_8_time_past = time

            options2 = request.POST["options2"]
            options1 = request.POST["options1"]

            if (options1 == "no" and options2 == "no"):
                x.q_8_concentration_past = False
                x.q_8_decisions_past = False
                x.q_8_check_past = False
                x.save()
                return render(request, "questionaire/q9_past.html", {"auth_token": auth_token})

            else:
                if (options1 == "yes"):
                    x.q_8_concentration_past = True
                else:
                    x.q_8_concentration_past = False

                if (options2 == "yes"):
                    x.q_8_decisions_past = True
                else:
                    x.q_8_decisions_past = False

                try:
                    answer = request.POST["answer"]
                    x.q_8_text_past = answer
                except:
                    x.q_8_text_past = ''

                lasted = request.POST["lasted"]

                if (lasted == "yes"):
                    x.q_8_lasted_past = True
                    x.q_8_check_past = True
                    x.save()
                    return render(request, "questionaire/q9_past.html", {"auth_token": auth_token})
                else:
                    x.q_8_lasted_past = False
                    x.q_8_check_past = False
                    x.save()
                    return render(request, "questionaire/q9_past.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q24(request, auth_token):
    if request.method == "POST":
        if(1):
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_9_time_past = time
            if(1):
                any = request.POST["any"]
                x.q_9_any_past = True
                done = request.POST["done"]
                if(done == "yes"):
                    x.q_9_done_past = True
                    try:
                        answer = request.POST["answer"]
                        x.q_9_text_past = answer
                    except:
                        x.q_9_text_past = ''
                    plan = request.POST["plan"]
                    action = request.POST["action"]
                    attempt = request.POST["attempt"]

                    if(plan == "yes"):
                        x.q_9_plan_past = True
                    else:
                        x.q_9_plan_past = False
                    
                    if(action == "yes"):
                        x.q_9_action_past = True
                    else:
                        x.q_9_action_past = False
                    
                    if(attempt == "yes"):
                        x.q_9_attempt_past = True
                    else:
                        x.q_9_attempt_past = False
                    
                else:
                    x.q_9_done_past = False
                
                x.q_9_check_past = True
            else:
                x.q_9_any_past = False
                x.q_9_check_past = False
            l=[x.q_1_check_past,x.q_2_check_past,x.q_3_check_past,x.q_4_check_past,x.q_5_check_past,x.q_6_check_past,x.q_7_check_past,x.q_8_check_past,x.q_9_check_past]
            x.q_count_past = l.count(True)
            if(l.count(True)>=5):
                x.save()
                return render(request, "questionaire/q10_past.html", {"auth_token": auth_token})
            else:
                x.result_past = False
                x.save()
                return render(request, "questionaire/report.html", {"auth_token": auth_token})

        else:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q25(request, auth_token):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_10_time_past = time

            try:
                any = request.POST["any"]
                x.q_10_any_past = True
                x.q_10_check_past = True
                x.result_past = True
                x.save()

                return render(request, "questionaire/q11_past.html", {"auth_token": auth_token})
            except:
                x.q_10_any_past = False

                done = request.POST["done"]

                if (done == "yes"):
                    x.q_10_other_past = True
                    x.result_past = True
                    x.save()
                    return render(request, "questionaire/q11_past.html", {"auth_token": auth_token})
                else:
                    x.q_10_other_past = False
                    try:
                        answer = request.POST["answer"]
                        x.q_10_text_past = answer
                    except:
                        x.q_10_text_past = ''
                    x.result_past = False
                    x.save()
                    return render(request, "questionaire/report.html", {"auth_token": auth_token})
        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')


def q26(request, auth_token):
    if request.method == "POST":
        x = user_data.objects.get(auth_token=auth_token)

        auth_token = str(uuid.uuid4())

        time = request.POST["time"]
        x.auth_token = auth_token
        x.q_11_time_past = time

        when = request.POST["when"]
        x.q_11_when_past = when
        done = request.POST["done"]

        if (done == "yes"):
            x.q_11_ill_past = True
            try:
                answer = request.POST["answer"]
                x.q_11_text_past = answer
            except:
                x.q_11_text_past = ''
        else:
            x.q_11_ill_past = False

        meds = request.POST["meds"]

        if (meds == "yes"):
            x.q_11_meds_past = True
            change = request.POST["change"]

            if (change == "yes"):
                x.q_11_change_past = True
            else:
                x.q_11_change_past = False
        else:
            x.q_11_meds_past = False

        drugs = request.POST["drugs"]

        if (drugs == "yes"):
            x.q_11_drugs_past = True
        else:
            x.q_11_drugs_past = False

        x.save()
        return render(request, "questionaire/q12_past.html", {"auth_token": auth_token})
    return render(request, 'questionaire/forbidden.html')


def q27(request, auth_token):
    if request.method == "POST":

        x = user_data.objects.get(auth_token=auth_token)

        auth_token = str(uuid.uuid4())

        time = request.POST["time"]
        x.auth_token = auth_token
        x.q_12_time_past = time

        date = request.POST["date"]
        x.q_12_when_past = date
        x.save()
        return render(request, "questionaire/q13_past.html", {"auth_token": auth_token})
    return render(request, 'questionaire/forbidden.html')

def report(request, auth_token):
    if request.method == "POST":

        x = user_data.objects.get(auth_token=auth_token)

        auth_token = str(uuid.uuid4())

        time = request.POST["time"]
        x.auth_token = auth_token
        x.q_13_time_past = time

        num = request.POST["num"]
        x.q_13_num_past = num
        x.save()
        return render(request, "questionaire/report.html", {"auth_token": auth_token})
    return render(request, 'questionaire/forbidden.html')