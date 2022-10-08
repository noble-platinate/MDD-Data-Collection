# Generated by Django 4.1 on 2022-10-07 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionaire', '0008_rename_q_3_lasted_user_data_q_4_check_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_data',
            name='q_5_check',
            field=models.BooleanField(default=None),
        ),
        migrations.AddField(
            model_name='user_data',
            name='q_5_time',
            field=models.FloatField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='auth_token',
            field=models.CharField(default=None, max_length=150),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='date_of_test',
            field=models.DateField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_1_any',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_1_check',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_1_lasted',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_1_text',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_1_time',
            field=models.FloatField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_2_any_minus',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_2_any_plus',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_2_check',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_2_lasted_minus',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_2_lasted_plus',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_2_text_minus',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_2_text_plus',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_2_time',
            field=models.FloatField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_3_any',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_3_check',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_3_time',
            field=models.FloatField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_3_voluntary',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_3_weight',
            field=models.BigIntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_4_any',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_4_check',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_4_current',
            field=models.BigIntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_4_lasted',
            field=models.BooleanField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_4_past',
            field=models.BigIntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='q_4_time',
            field=models.FloatField(default=None),
        ),
        migrations.AlterField(
            model_name='user_data',
            name='results',
            field=models.BigIntegerField(default=None),
        ),
    ]
