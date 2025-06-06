# Generated by Django 5.2.1 on 2025-05-13 20:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0003_parrafoproyecto_descripcion_imagen_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="proyecto",
            name="conclusion",
            field=models.TextField(
                blank=True, help_text="Conclusion del desarrollo", null=True
            ),
        ),
        migrations.CreateModel(
            name="TecnologiasProyecto",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nombre", models.CharField(max_length=100)),
                (
                    "icono",
                    models.CharField(
                        help_text="Clase de FontAwesome, ej: 'fa-brands fa-python'",
                        max_length=100,
                    ),
                ),
                (
                    "proyecto",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="tecnologias_proyecto",
                        to="app.proyecto",
                    ),
                ),
            ],
        ),
    ]
