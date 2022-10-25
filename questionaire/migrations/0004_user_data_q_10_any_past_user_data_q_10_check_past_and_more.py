# Generated by Django 4.1.2 on 2022-10-25 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionaire', '0003_remove_user_data_results_user_data_q_11_when_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_data',
            name='q_10_any_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_10_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_10_other_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_10_text_past',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_10_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_change_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_drugs_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_ill_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_meds_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_text_past',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_when_past',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_12_time',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_12_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_12_when',
            field=models.DateField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_12_when_past',
            field=models.DateField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_13_num',
            field=models.BigIntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_13_num_past',
            field=models.BigIntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_13_time',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_13_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_1_any_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_1_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_1_lasted_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_1_text_past',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_1_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_2_any_minus_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_2_any_plus_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_2_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_2_text_minus_past',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_2_text_plus_past',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_2_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_3_any_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_3_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_3_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_3_voluntary_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_3_weight_past',
            field=models.BigIntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_4_any_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_4_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_4_current_past',
            field=models.BigIntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_4_lasted_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_4_past_past',
            field=models.BigIntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_4_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_5_any_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_5_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_5_lasted_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_5_notice_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_5_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_6_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_6_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_7_any_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_7_care_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_7_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_7_lasted_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_7_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_concentration_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_decisions_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_lasted_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_text_past',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_action_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_any_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_attempt_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_check_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_done_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_plan_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_text_past',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_time_past',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_count_past',
            field=models.BigIntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='qq_3_count_past',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='qq_3_time_past',
            field=models.FloatField(default=None, null=True),
        ),
    ]