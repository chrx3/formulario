from rest_framework.serializers import ModelSerializer
from .models import Formulario


class FormSerializer(ModelSerializer):
    class Meta:
        model = Formulario
        fields = '__all__'