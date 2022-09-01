from .models import Appointment
from rest_framework import serializers

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'user_id', 'date', 'time', 'service_booked']
        depth = 1