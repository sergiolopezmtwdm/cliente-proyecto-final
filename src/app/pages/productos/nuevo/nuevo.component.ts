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
    { value: 1, label: 'Acción' },
    { value: 2, label: 'Disparos' },
    { value: 3, label: 'Estrategia' },
    { value: 4, label: 'Hack and Slash' },
    { value: 5, label: 'Simulación' },
    { value: 6, label: 'Deporte' },
    { value: 7, label: 'Carreras' },
    { value: 8, label: 'Aventura' },
    { value: 9, label: 'Rol' },
  ];
  generoSelected = null;

  clasificacionBindingsList = [
    { value: 1, label: 'TODOS' },
    { value: 2, label: 'TODOS + 10' },
    { value: 3, label: 'ADOLESCENTES' },
    { value: 4, label: 'MADURO +17' },
    { value: 5, label: 'ADULTOS ÚNICAMENTE +18' },
    { value: 6, label: 'CLASIFICACIÓN PENDIENTE' },
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
