# Generated by Django 4.1 on 2022-10-08 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionaire', '0011_user_data_q_5_any_user_data_q_5_lasted_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_data',
            name='q_8_check',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_concentration',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_decisions',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_lasted',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_text',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_8_time',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_action',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_any',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_attempt',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_done',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_plan',
            field=models.BooleanField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_9_text',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_count',
            field=models.BooleanField(default=None, null=True),
        ),
    ]
