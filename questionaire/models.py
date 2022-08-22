from django.db import models

# Create your models here.

class registration(models.Model):
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
    answers = models.CharField(max_length=150, null=True)
    results = models.BigIntegerField(null=True)
    time = models.CharField(max_length=1000, null=True)
    # q_1 = models.CharField(max_length=10, null=True) # "1,1.123"
    # q_2 = models.CharField(max_length=10, null=True)
    # q_3 = models.CharField(max_length=10, null=True)
    # q_4 = models.CharField(max_length=10, null=True)
    # q_5 = models.CharField(max_length=10, null=True)
    # q_6 = models.CharField(max_length=10, null=True)
    # q_7 = models.CharField(max_length=10, null=True)
    # q_8 = models.CharField(max_length=10, null=True)
    # q_9 = models.CharField(max_length=10, null=True)
    # q_10 = models.CharField(max_length=10, null=True)
    # q_11 = models.CharField(max_length=10, null=True)
    # q_12 = models.CharField(max_length=10, null=True)
    # q_13 = models.CharField(max_length=10, null=True)
    # q_14 = models.CharField(max_length=10, null=True)
    # q_15 = models.CharField(max_length=10, null=True)
    # q_16 = models.CharField(max_length=10, null=True)
    # q_17 = models.CharField(max_length=10, null=True)
    # q_18 = models.CharField(max_length=10, null=True)
    # q_19 = models.CharField(max_length=10, null=True)
    # q_20= models.CharField(max_length=10, null=True)
    # q_21 = models.CharField(max_length=10, null=True)
    # q_22 = models.CharField(max_length=10, null=True)
    # q_23 = models.CharField(max_length=10, null=True)
    # q_24 = models.CharField(max_length=10, null=True)
    # q_25 = models.CharField(max_length=10, null=True)
    # q_26 = models.CharField(max_length=10, null=True)
    # q_27 = models.CharField(max_length=10, null=True)
    # q_28 = models.CharField(max_length=10, null=True)
    # q_29 = models.CharField(max_length=10, null=True)
    # q_30 = models.CharField(max_length=10, null=True)
    # q_31 = models.CharField(max_length=10, null=True)
    # renames the instances of the model
    # with their title name

    def __str__(self):
        return self.f_name
