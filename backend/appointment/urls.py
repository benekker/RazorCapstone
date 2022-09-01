from appointment import views
from django.urls import path

urlpatterns = [
    path('', views.customer_booking),
    path('all/', views.get_all_appointments)
]