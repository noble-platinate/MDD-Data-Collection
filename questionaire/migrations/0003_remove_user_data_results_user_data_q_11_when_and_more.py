# Generated by Django 4.1.2 on 2022-10-21 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionaire', '0002_remove_user_data_q_7_text'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user_data',
            name='results',
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_11_when',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='result_current',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='result_past',
            field=models.BooleanField(default=None, null=True),
        ),
    ]