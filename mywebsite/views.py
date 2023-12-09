from django.shortcuts import render

def home(request):
    return render(request, 'home.html', {'name': 'HariPrasath', 'profession': 'Application Engineer at Amazon'})

