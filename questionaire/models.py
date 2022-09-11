from django.db import models
# Create your models here.


class user_data(models.Model):
    # fields of the model
    auth_token = models.CharField(max_length=150, null=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    password = models.CharField(max_length=150)
    email = models.EmailField()
    education = models.CharField(max_length=150)
    state = models.CharField(max_length=150)
    locality = models.CharField(max_length=150)
    marital = models.CharField(max_length=150)

    consent = models.BigIntegerField(default=0)

    date_of_test = models.DateField(null=True)

    q_1_any = models.BooleanField(null=True)
    q_1_text = models.CharField(max_length=200, null=True)
    q_1_lasted = models.BooleanField(null=True)
    q_1_time = models.FloatField(null=True)

    q_2_any_plus = models.BooleanField(null=True)
    q_2_text_plus = models.CharField(max_length=200, null=True)
    q_2_any_minus = models.BooleanField(null=True)
    q_2_text_minus = models.CharField(max_length=200, null=True)
    q_2_lasted = models.BooleanField(null=True)
    q_2_time = models.FloatField(null=True)

    results = models.BigIntegerField(null=True)

    def __str__(self):
        return self.email
