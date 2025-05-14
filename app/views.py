from django.shortcuts import render
from .models import Proyecto, Tecnologia, Formacion
from django.shortcuts import get_object_or_404

def index(request):
    proyectos = Proyecto.objects.order_by('-creado_en')[:3]
    tecnologias = Tecnologia.objects.all()
    formaciones = Formacion.objects.all()

    context = {
        'proyectos': proyectos,
        'tecnologias': tecnologias,
        'formaciones': formaciones
    }
    return render(request, 'app/index.html', context)


def proyectos (request):
    proyectos = Proyecto.objects.order_by('-creado_en')
    return render(request, 'app/proyectos.html', {'proyectos':proyectos})

def detalle_proyecto(request, id_proyecto):
    proyecto = get_object_or_404(Proyecto, id=id_proyecto)
    return render(request, 'app/detalle_proyecto.html', {'proyecto': proyecto})

def contacto(request):
    return render(request, 'app/contacto.html')