from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'synerd/index.html')

def join(request):
    return render(request, 'synerd/join.html')

def dashboard(request):
    return render(request, 'synerd/dashboard.html')

def members(request):
    return render(request, 'synerd/members.html')