from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('join/', views.join, name='join'),
    path('dashboard/', views.dashboard, name='dashboard')
]