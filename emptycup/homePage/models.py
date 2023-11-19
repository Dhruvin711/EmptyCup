from django.db import models

# Create your models here.
class Designers(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=False)
    rating = models.DecimalField(max_digits=2, decimal_places=1)

    projects = models.IntegerField()
    experience = models.IntegerField()
    price = models.CharField(max_length=20)
    contacts = models.JSONField(default=list)

    hide = models.BooleanField(default=False)
    shortlist = models.BooleanField(default=False)

    def __str__(self):
        return self.name