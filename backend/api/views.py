from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view

from .models import Formulario
from .serializers import FormSerializer


@api_view(['GET'])
def getFormulario(request):
    form = Formulario.objects.all()
    serializer = FormSerializer(form, many =True)
    return Response(serializer.data)

@api_view(['POST'])
def postFormulario(request):
    data = request.data
    form = Formulario.objects.create(
        nombre = data['nombre'],
        apellidop = data['apellidop'],
        apellidom = data['apellidom'],
        estado = data['estado'],
        telefono = data['telefono'],
        rut = data['rut'],
        password = data['password'],
        rol = data['rol']
    )
    serializer = FormSerializer(form, many=False)
    return Response(serializer.data)

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