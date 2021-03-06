# Generated by Django 2.0.1 on 2018-01-28 04:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rescuerequest_time'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cluster',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cluster_id', models.IntegerField()),
            ],
        ),
        migrations.RemoveField(
            model_name='rescuerequest',
            name='cluster_id',
        ),
        migrations.AddField(
            model_name='rescuerequest',
            name='cluster',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.Cluster'),
        ),
    ]
