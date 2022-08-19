from django.shortcuts import render, redirect, HttpResponse
from .forms import Add_book
from .models import book
from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
@csrf_exempt
def add(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        print(body)
        create_entry = book.objects.create(name=body['name'],author=body['author'],quantity=body['quantity'])
        data = serializers.serialize('json', [create_entry])
        new_qs = json.loads(data)
        return JsonResponse(new_qs, safe=False)

        
        '''print("body",request.body)
        print("post",request.post)'''
        
        # nm = request.post.name
        # au = request.post.author
        # qt = request.post.quantity
       
        # bk = book(name=nm, author=au, quantity=qt)
        # bk.save()




        '''fm = Add_book(request.POST)
        if fm.is_valid():
            nm = fm.cleaned_data['name']
            au = fm.cleaned_data['author']
            qt = fm.cleaned_data['quantity']
            bk = book(name=nm, author=au, quantity=qt)
            bk.save()
            fm = Add_book()'''

    
    #return render(request, 'add.html', {'form':fm, 'allbook':allbook})
    
    '''return JsonRenew_qs_json = json.loads(qs_json)
    
    return JsonResponse(new_qs_json, safe=False)'''
    


def json_data(request):
    allbook = book.objects.all()
    qs_json = serializers.serialize('json', allbook)
    new_qs_json = json.loads(qs_json)
    return JsonResponse(new_qs_json, safe=False)
    
def get_by_id(request, id):
    if request.method == 'GET':
       # body = json.loads(request.body)
        book.objects.filter(pk=id)
        get_obj = book.objects.filter(pk=id)
        data = serializers.serialize('json', get_obj)
        new_qs = json.loads(data)
        return JsonResponse(new_qs, safe=False)



@csrf_exempt
def update(request, id):
    if request.method == 'PUT':
        body = json.loads(request.body)
        book.objects.filter(pk=id).update(name=body['name'],author=body['author'],quantity=body['quantity'])
        get_obj = book.objects.filter(pk=id)
        data = serializers.serialize('json', get_obj)
        new_qs = json.loads(data)
        return JsonResponse(new_qs, safe=False)

        '''fm = Add_book(request.POST, instance=pi)
        if fm.is_valid():
            fm.save()'''
    else:
        pi = book.objects.get(pk=id)
        #fm = Add_book(instance=pi)
    #return render(request, 'update.html', {'form':fm})



def delete_book(request, id):
    print("print",id)
    if request.method == 'GET':
        print("if",id)
        pi = book.objects.get(pk=id)
        pi.delete()
        return redirect('showallbooks')