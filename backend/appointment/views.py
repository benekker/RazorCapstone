from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import AppointmentSerializer
from .models import Appointment
from variable_constants import *


@api_view([POST, GET])
@permission_classes([IsAuthenticated])
def customer_booking(request):
    if request.method == POST:
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == GET:
        appointments = Appointment.objects.filter(user_id=request.user.id)
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)


@api_view([GET])
@permission_classes([AllowAny])
def get_all_appointments(request):
    if request.method == GET:
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)