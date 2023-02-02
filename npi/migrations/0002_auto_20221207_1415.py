# Generated by Django 2.2 on 2022-12-07 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('npi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='issue',
            name='balance_defcet_qty',
            field=models.IntegerField(default=0, verbose_name='Balance Defects'),
        ),
        migrations.AddField(
            model_name='issue',
            name='balance_qty',
            field=models.IntegerField(default=0, verbose_name='Balance Inputs'),
        ),
        migrations.AddField(
            model_name='issue',
            name='mini2_build_defcet_qty',
            field=models.IntegerField(default=0, verbose_name='Mini-2 Defects'),
        ),
        migrations.AddField(
            model_name='issue',
            name='mini2_build_qty',
            field=models.IntegerField(default=0, verbose_name='Mini-2 Inputs'),
        ),
        migrations.AddField(
            model_name='issue',
            name='mini_build_defcet_qty',
            field=models.IntegerField(default=0, verbose_name='Mini Defects'),
        ),
        migrations.AddField(
            model_name='issue',
            name='mini_build_qty',
            field=models.IntegerField(default=0, verbose_name='Mini Inputs'),
        ),
    ]