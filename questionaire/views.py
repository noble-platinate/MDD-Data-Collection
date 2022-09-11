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
    subject = 'Your accounts need to be verified'
    message = f'Hi paste the link to verify your account http://127.0.0.1:8000/verify/{token}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message , email_from ,recipient_list )

def send_mail_for_reset(email, password):
    subject = 'Retrieve password'
    message = f'Hi, your password is {password}'
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
            except:
                x.q_1_any = False
                return render(request, "questionaire/q2.html", {"result": 0, "auth_token": auth_token})
        
            try:    
                answer = request.POST["answer"]
                x.q_1_text = answer
            except:
                x.q_1_text = ''

            options = request.POST["options"]

            if(options == "yes"):
                x.q_1_lasted = True
                x.save()
                return render(request, "questionaire/q2.html", {"result": 1, "auth_token": auth_token})
            elif(options == "no"):
                x.q_1_lasted = False
                x.save()
                return render(request, "questionaire/q2.html", {"result": 0, "auth_token": auth_token})

        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q3(request):
    if request.method == "POST":
        try:
            x = user_data.objects.get(auth_token=auth_token)

            auth_token = str(uuid.uuid4())

            time = request.POST["time"]
            x.auth_token = auth_token
            x.q_2_time = time

            options = request.POST["options"]

            if(options == "yes"):
                option = True
            else:
                option=False

            if(x.q_1_lasted == True):
                x.q_2_any_plus = option
                if(option==True):
                    try:
                        answer = request.POST["answer"]
                        x.q_2_text_plus = answer
                    except:
                        x.q_2_text_plus = ''

                    lasted = request.POST["lasted"]

                    if(lasted=="yes"):
                        x.q_2_lasted = True
                        x.save()
                        return render(request, "q3.html", {"data": x, "auth_token": auth_token})
                    else:
                        x.q_2_lasted = False
                        x.save()
                        return render(request, "q3.html", {"data": x, "auth_token": auth_token})
                else:
                    x.save()
                    return render(request, "q3.html", {"data": x, "auth_token": auth_token})
            else:
                x.q_2_any_minus = option

                if(option == True):
                    try:
                        answer = request.POST["answer"]
                        x.q_2_text_minus = answer
                    except:
                        x.q_2_text_minus = ''

                    lasted = request.POST["lasted"]

                    if(lasted == "yes"):
                        x.q_2_lasted = True
                        x.save()
                        return render(request, "q3.html", {"data": x, "auth_token": auth_token})
                    else:
                        x.q_2_lasted = False
                        x.save()
                        return render(request,"end.html")
                else:
                    x.save()
                    return render(request, "end.html")

        except:
            return render(request, 'questionaire/forbidden.html')
    return render(request, 'questionaire/forbidden.html')

def q3(request, auth_token):
    return render(request, "questionaire/q2.html")

def q4(request, auth_token):
    return render(request, "questionaire/q2.html")

def q5(request, auth_token):
    return render(request, "questionaire/q2.html")

def q6(request, auth_token):
    return render(request, "questionaire/q2.html")

def q7(request, auth_token):
    return render(request, "questionaire/q2.html")

def q8(request, auth_token):
    return render(request, "questionaire/q2.html")

def q9(request, auth_token):
    return render(request, "questionaire/q2.html")

def q10(request, auth_token):
    return render(request, "questionaire/q2.html")

def q11(request, auth_token):
    return render(request, "questionaire/q2.html")

def q12(request, auth_token):
    return render(request, "questionaire/q2.html")

def q13(request, auth_token):
    return render(request, "questionaire/q2.html")
