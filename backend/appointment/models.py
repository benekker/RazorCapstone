from django.db import models
from authentication.models import User

class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    service_booked = models.CharField(max_length=200)
