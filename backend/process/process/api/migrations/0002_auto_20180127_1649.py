# Generated by Django 2.0.1 on 2018-01-27 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClusterPacket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cluster_size', models.IntegerField()),
            ],
        ),
        migrations.RenameModel(
            old_name='Disaster',
            new_name='Keyword',
        ),
    ]