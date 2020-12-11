import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  plataformaBindingsList = [
    { value: 1, label: 'Xbox' },
    { value: 2, label: 'PS' },
    { value: 3, label: 'PC' },
  ];
  PlataformaSelected = null;

  generoBindingsList = [
    { value: 1, label: 'Aventura' },
    { value: 2, label: 'RPG' },
    { value: 3, label: 'Modo Supervivencia' },
    { value: 4, label: 'Acción' },
    { value: 5, label: 'Disparos' },
    { value: 6, label: 'Estrategia' },
    { value: 7, label: 'Hack and Slash' },
    { value: 8, label: 'Simulación' },
    { value: 9, label: 'Deporte' },
    { value: 10, label: 'Carreras' },
    { value: 12, label: 'Rol' },
  ];
  generoSelected = null;

  clasificacionBindingsList = [
    { value: 2, label: 'TODOS + 10' },
    { value: 3, label: 'TODOS' },
    { value: 4, label: 'ADOLESCENTES' },
    { value: 5, label: 'MADURO +17' },
    { value: 6, label: 'ADULTOS ÚNICAMENTE +18' },
    { value: 7, label: 'CLASIFICACIÓN PENDIENTE' },
  ];
  clasificacionSelected = null;

  constructor(private productoSvc: ProductosService) { }

  ngOnInit(): void {
    this.PlataformaSelected = this.plataformaBindingsList[0];
    this.generoSelected = this.generoBindingsList[0];
    this.clasificacionSelected = this.clasificacionBindingsList[0];
  }

  public insertarProducto = (form: NgForm) => {
    // const formulario = JSON.stringify(form.value);
    // console.log("formulario: ", formulario);
    this.productoSvc.insertProduct(form);

  }
}
