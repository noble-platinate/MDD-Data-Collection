# Generated by Django 4.1 on 2022-10-06 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionaire', '0007_user_data_q_2_check_user_data_q_3_any_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user_data',
            old_name='q_3_lasted',
            new_name='q_4_check',
        ),
        migrations.RenameField(
            model_name='user_data',
            old_name='q_3_current',
            new_name='q_4_current',
        ),
        migrations.RenameField(
            model_name='user_data',
            old_name='q_3_past',
            new_name='q_4_past',
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_4_lasted',
            field=models.BooleanField(null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_4_time',
            field=models.FloatField(null=True),
        ),
    ]
