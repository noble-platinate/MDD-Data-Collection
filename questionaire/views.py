from django.shortcuts import render
from .models import Registration
from django.http import JsonResponse


def index(request):
    return render(request, "questionaire/index.html")


def consent(request):
    return render(request, "questionaire/consent.html")


def register(request="GET"):
    if request.method == "POST":
        f_name = request.POST["f_name"]
        l_name = request.POST["l_name"]
        gender = request.POST["gender"]
        dob = request.POST["DOB"]
        address = request.POST["address"]
        education = request.POST["education"]
        med_his = request.POST["medical"]
        medications = request.POST["medications"]
        gender = request.POST["gender"]
        phn = request.POST["phn"]
        email = request.POST["email"]
        try:
            x = Registration.objects.get(email=email)
            return render(request, "questionaire/reg.html", {
                "message": "email already used!"
            })
        except:
            x = Registration(f_name=f_name, l_name=l_name,
                             gender=gender, dob=dob, email=email, address=address, phn=phn, education=education, med_his=med_his, medications=medications)
            x.save()
            return render(request, "questionaire/test.html", {"question": "In the past month, since (ONE MONTH AGO), has there been a period of time when you were feeling depressed or down most of the day, nearly every day? (Has anyone said that you look sad, down, or depressed?)", "email": email})
    else:
        return render(request, "questionaire/register.html")


def questionaire(request):
    print("hi")
    if request.method == 'POST':
        result = request.POST.get('result')
        order = request.POST.get('order')
        email = request.POST.get('email')
        x = Registration.objects.get(email=email)
        x.result = result
        x.answers = order
        x.save()
        data = {'result': result, 'email': email, 'order': order}
        print(data)
        return JsonResponse(data, safe=False)
    else:
        return render(request, "questionaire/index.html")
