# Generated by Django 4.1 on 2022-09-06 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionaire', '0002_user_data_auth_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_data',
            name='q_1_any',
            field=models.BooleanField(null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_1_lasted',
            field=models.BooleanField(null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_1_text',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
