from django.db import models

# Create your models here.

class Registration(models.Model):
    # fields of the model
    f_name = models.CharField(max_length=50)
    l_name = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    email = models.EmailField()
    phn = models.BigIntegerField()
    medications = models.CharField(max_length=200)
    med_his = models.CharField(max_length=150)
    education = models.CharField(max_length=150)
    answers = models.CharField(max_length=150, default=None)
    results = models.CharField(max_length=150, default=None)
    # renames the instances of the model
    # with their title name

    def __str__(self):
        return self.f_name
