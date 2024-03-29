# Generated by Django 2.2.7 on 2019-11-21 10:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0002_auto_20191121_0754'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 21, 10, 27, 45, 508412)),
        ),
        migrations.AlterField(
            model_name='socialmedia',
            name='aparat_followers',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='socialmedia',
            name='aparat_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='socialmedia',
            name='facebook_followers',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='socialmedia',
            name='facebook_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='socialmedia',
            name='instagram_followers',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='socialmedia',
            name='instagram_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='socialmedia',
            name='twitter_followers',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='socialmedia',
            name='twitter_link',
            field=models.URLField(blank=True, null=True),
        ),
    ]
