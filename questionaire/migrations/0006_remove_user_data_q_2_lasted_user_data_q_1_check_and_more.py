# Generated by Django 4.1 on 2022-09-16 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionaire', '0005_remove_user_data_time_1_user_data_q_2_any_minus_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user_data',
            name='q_2_lasted',
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_1_check',
            field=models.BooleanField(null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_2_lasted_minus',
            field=models.BooleanField(null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_2_lasted_plus',
            field=models.BooleanField(null=True),
        ),
    ]