# Generated by Django 2.2.7 on 2019-11-23 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('oldfaceit', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='oldpost',
            name='slug',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]