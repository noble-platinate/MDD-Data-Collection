from django.shortcuts import render
from .models import registration
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
            x = registration.objects.get(email=email)
            return render(request, "questionaire/register.html", {
                "message": "email already used!"
            })
        except:
            x = registration(f_name=f_name, l_name=l_name,
                             gender=gender, dob=dob, email=email, address=address, phn=phn, education=education, med_his=med_his, medications=medications)
            x.save()
            return render(request, "questionaire/test.html", {"question": "In the past month, since (ONE MONTH AGO), has there been a period of time when you were feeling depressed or down most of the day, nearly every day? (Has anyone said that you look sad, down, or depressed?)", "email": email})
    else:
        return render(request, "questionaire/register.html")


def questionaire(request):
    if request.method == 'POST':
        result = request.POST.get('result')
        order = request.POST.get('order')
        email = request.POST.get('email')
        time = request.POST.get('time')
        x = registration.objects.get(email=email)
        x.results = result
        x.answers = order
        x.time = time
        x.save()
    return render(request, "questionaire/index.html")
