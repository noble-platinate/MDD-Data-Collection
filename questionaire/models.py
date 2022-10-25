from django.db import models
# Create your models here.


class user_data(models.Model):
    # fields of the model
    auth_token = models.CharField(max_length=150, default=None, null=True)
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

    date_of_test = models.DateField(default=None, null=True)

    q_1_any = models.BooleanField(default=None, null=True)
    q_1_text = models.CharField(max_length=200, default=None, null=True)
    q_1_lasted = models.BooleanField(default=None, null=True)
    q_1_time = models.FloatField(default=None, null=True)
    q_1_check = models.BooleanField(default=None, null=True)

    q_2_any_plus = models.BooleanField(default=None, null=True)
    q_2_text_plus = models.CharField(max_length=200, default=None, null=True)
    q_2_lasted_plus = models.BooleanField(default=None, null=True)
    q_2_any_minus = models.BooleanField(default=None, null=True)
    q_2_text_minus = models.CharField(max_length=200, default=None, null=True)
    q_2_lasted_minus = models.BooleanField(default=None, null=True)
    q_2_time = models.FloatField(default=None, null=True)
    q_2_check = models.BooleanField(default=None, null=True)

    q_3_any = models.BooleanField(default=None, null=True)
    q_3_weight = models.BigIntegerField(default=None, null=True)
    q_3_voluntary = models.BooleanField(default=None, null=True)
    q_3_time = models.FloatField(default=None, null=True)
    q_3_check = models.BooleanField(default=None, null=True)

    q_4_any = models.BooleanField(default=None, null=True)
    q_4_current = models.BigIntegerField(default=None, null=True)
    q_4_past = models.BigIntegerField(default=None, null=True)
    q_4_lasted = models.BooleanField(default=None, null=True)
    q_4_time = models.FloatField(default=None, null=True)
    q_4_check = models.BooleanField(default=None, null=True)

    q_5_any = models.BooleanField(default=None, null=True)
    q_5_notice = models.BooleanField(default=None, null=True)
    q_5_lasted = models.BooleanField(default=None, null=True)
    q_5_time = models.FloatField(default=None, null=True)
    q_5_check = models.BooleanField(default=None, null=True)

    q_6_check = models.BooleanField(default=None, null=True)
    q_6_time = models.FloatField(default=None, null=True)

    q_7_any = models.BooleanField(default=None, null=True)
    q_7_lasted = models.BooleanField(default=None, null=True)
    q_7_care = models.BooleanField(default=None, null=True)
    q_7_time = models.FloatField(default=None, null=True)
    q_7_check = models.BooleanField(default=None, null=True)

    q_8_concentration = models.BooleanField(default=None, null=True)
    q_8_decisions = models.BooleanField(default=None, null=True)
    q_8_text = models.CharField(max_length=200, default=None, null=True)
    q_8_lasted = models.BooleanField(default=None, null=True)
    q_8_time = models.FloatField(default=None, null=True)
    q_8_check = models.BooleanField(default=None, null=True)

    q_9_any = models.BooleanField(default=None, null=True)
    q_9_action = models.BooleanField(default=None, null=True)
    q_9_done = models.BooleanField(default=None, null=True)
    q_9_plan = models.BooleanField(default=None, null=True)
    q_9_text = models.CharField(max_length=200, default=None, null=True)
    q_9_attempt = models.BooleanField(default=None, null=True)
    q_9_time = models.FloatField(default=None, null=True)
    q_9_check = models.BooleanField(default=None, null=True)

    q_10_any = models.BooleanField(default=None, null=True)
    q_10_other = models.BooleanField(default=None, null=True)
    q_10_text = models.CharField(max_length=200, default=None, null=True)
    q_10_time = models.FloatField(default=None, null=True)
    q_10_check = models.BooleanField(default=None, null=True)

    q_11_when = models.CharField(max_length=200, default=None, null=True)
    q_11_ill = models.BooleanField(default=None, null=True)
    q_11_meds = models.BooleanField(default=None, null=True)
    q_11_change = models.BooleanField(default=None, null=True)
    q_11_drugs = models.BooleanField(default=None, null=True)
    q_11_text = models.CharField(max_length=200, default=None, null=True)
    q_11_time = models.FloatField(default=None, null=True)
    q_11_check = models.BooleanField(default=None, null=True)

    q_12_time = models.FloatField(default=None, null=True)
    q_12_when = models.DateField(default=None, null=True)

    q_13_time = models.FloatField(default=None, null=True)
    q_13_num = models.BigIntegerField(default=None, null=True)

    q_count = models.BigIntegerField(default=None, null=True)
    result_current = models.BooleanField(default=None, null=True)

    q_1_any_past = models.BooleanField(default=None, null=True)
    q_1_text_past = models.CharField(max_length=200, default=None, null=True)
    q_1_lasted_past = models.BooleanField(default=None, null=True)
    q_1_time_past = models.FloatField(default=None, null=True)
    q_1_check_past = models.BooleanField(default=None, null=True)

    q_2_any_plus_past = models.BooleanField(default=None, null=True)
    q_2_text_plus_past = models.CharField(max_length=200, default=None, null=True)
    q_2_any_minus_past = models.BooleanField(default=None, null=True)
    q_2_text_minus_past = models.CharField(max_length=200, default=None, null=True)
    q_2_time_past = models.FloatField(default=None, null=True)
    q_2_check_past = models.BooleanField(default=None, null=True)

    qq_3_time_past = models.FloatField(default=None, null=True)
    qq_3_count_past = models.BooleanField(default=None, null=True)

    q_3_any_past = models.BooleanField(default=None, null=True)
    q_3_weight_past = models.BigIntegerField(default=None, null=True)
    q_3_voluntary_past = models.BooleanField(default=None, null=True)
    q_3_time_past = models.FloatField(default=None, null=True)
    q_3_check_past = models.BooleanField(default=None, null=True)

    q_4_any_past = models.BooleanField(default=None, null=True)
    q_4_current_past = models.BigIntegerField(default=None, null=True)
    q_4_past_past = models.BigIntegerField(default=None, null=True)
    q_4_lasted_past = models.BooleanField(default=None, null=True)
    q_4_time_past = models.FloatField(default=None, null=True)
    q_4_check_past = models.BooleanField(default=None, null=True)

    q_5_any_past = models.BooleanField(default=None, null=True)
    q_5_notice_past = models.BooleanField(default=None, null=True)
    q_5_lasted_past = models.BooleanField(default=None, null=True)
    q_5_time_past = models.FloatField(default=None, null=True)
    q_5_check_past = models.BooleanField(default=None, null=True)

    q_6_check_past = models.BooleanField(default=None, null=True)
    q_6_time_past = models.FloatField(default=None, null=True)

    q_7_any_past = models.BooleanField(default=None, null=True)
    q_7_lasted_past = models.BooleanField(default=None, null=True)
    q_7_care_past = models.BooleanField(default=None, null=True)
    q_7_time_past = models.FloatField(default=None, null=True)
    q_7_check_past = models.BooleanField(default=None, null=True)

    q_8_concentration_past = models.BooleanField(default=None, null=True)
    q_8_decisions_past = models.BooleanField(default=None, null=True)
    q_8_text_past = models.CharField(max_length=200, default=None, null=True)
    q_8_lasted_past = models.BooleanField(default=None, null=True)
    q_8_time_past = models.FloatField(default=None, null=True)
    q_8_check_past = models.BooleanField(default=None, null=True)

    q_9_any_past = models.BooleanField(default=None, null=True)
    q_9_action_past = models.BooleanField(default=None, null=True)
    q_9_done_past = models.BooleanField(default=None, null=True)
    q_9_plan_past = models.BooleanField(default=None, null=True)
    q_9_text_past = models.CharField(max_length=200, default=None, null=True)
    q_9_attempt_past = models.BooleanField(default=None, null=True)
    q_9_time_past = models.FloatField(default=None, null=True)
    q_9_check_past = models.BooleanField(default=None, null=True)

    q_10_any_past = models.BooleanField(default=None, null=True)
    q_10_other_past = models.BooleanField(default=None, null=True)
    q_10_text_past = models.CharField(max_length=200, default=None, null=True)
    q_10_time_past = models.FloatField(default=None, null=True)
    q_10_check_past = models.BooleanField(default=None, null=True)

    q_11_when_past = models.CharField(max_length=200, default=None, null=True)
    q_11_ill_past = models.BooleanField(default=None, null=True)
    q_11_meds_past = models.BooleanField(default=None, null=True)
    q_11_change_past = models.BooleanField(default=None, null=True)
    q_11_drugs_past = models.BooleanField(default=None, null=True)
    q_11_text_past = models.CharField(max_length=200, default=None, null=True)
    q_11_time_past = models.FloatField(default=None, null=True)
    q_11_check_past = models.BooleanField(default=None, null=True)

    q_12_time_past = models.FloatField(default=None, null=True)
    q_12_when_past = models.DateField(default=None, null=True)

    q_13_time_past = models.FloatField(default=None, null=True)
    q_13_num_past = models.BigIntegerField(default=None, null=True)

    q_count_past = models.BigIntegerField(default=None, null=True)
    result_past = models.BooleanField(default=None, null=True)

    def __str__(self):
        return self.email
