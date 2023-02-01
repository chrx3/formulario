from django.db import models

# Create your models here.
class Formulario(models.Model):
    nombre = models.CharField(max_length=50)
    apellidop = models.CharField(max_length=50)
    apellidom = models.CharField(max_length=50)
    estado = models.CharField(max_length=50)
    telefono = models.IntegerField()
    rut = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    rol = models.CharField(max_length=50)