from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view

from .models import Formulario
from .serializers import FormSerializer


@api_view(['GET'])
def getFormulario(request):
    
    respuesta ={}
    respuesta['estado'] = False
    respuesta['mensaje_error'] = ''
    form = Formulario.objects.values()
    
    if form:
        respuesta['estado'] = True
        respuesta['datos'] = form
    return Response(respuesta)

@api_view(['POST'])
def postFormulario(request):
    respuesta ={}
    respuesta['estado'] = False
    respuesta['mensaje_error'] = ''
    data = request.data
    form = FormSerializer(
        data={
        'nombre':data['nombre'],
        'apellidop':data['apellidop'],
        'apellidom':data['apellidom'],
        'estado':data['estado'],
        'telefono':data['telefono'],
        'rut':data['rut'],
        'password':data['password'],
        'rol':data['rol']
        }

    )
    if form.is_valid():
        form.save()
        respuesta['estado'] = True
        respuesta['datos'] = form.data
        print('guardado')
    else:
        mensaje_error = form.errors
        respuesta['estado'] = False
        respuesta['mensaje_error'] = mensaje_error
        print(mensaje_error)
    return Response(respuesta)

@api_view(['PUT'])
def putFormulario(request, pk):
    data = request.data
    form = Formulario.objects.get(id=pk)
    serializer = FormSerializer(instance=form, data = data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

@api_view(['DELETE'])
def deleteFormulario(request, pk):
    form = Formulario.objects.get(id=pk)
    form.delete()
    return Response('Eliminado')