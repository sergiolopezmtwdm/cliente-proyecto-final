import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  // producto: any;
  producto: any;
  // producto: any;

  plataformaBindingsList = [
    { value: 1, label: 'Xbox' },
    { value: 2, label: 'PS' },
    { value: 3, label: 'PC' },
  ];
  plataformaSelected = null;

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

  fechaLanzamiento: string;
  id:number;

  constructor(private router: ActivatedRoute, private productoSvc: ProductosService) {
    this.router.params.subscribe((param: any) => {
      this.id = parseInt(param['id']);
      this.getProductoById(param['id']);
    }
    );
  }

  ngOnInit(): void {

  }

  getProductoById(id: string) {
    // this.productoSvc.getProductoById(id).subscribe((data: any[]) => {
    //   this.producto = data;
    // });

    this.productoSvc.getProductoById(id).subscribe((data: any) => {
      this.producto = data;
      this.plataformaSelected =
        this.plataformaBindingsList.find( x => x.value === data.producto.idPlataforma );
      ;
      this.generoSelected =
        this.generoBindingsList.find( x => x.value === data.producto.idGenero )
      ;
      this.clasificacionSelected =
        this.clasificacionBindingsList.find( x => x.value === data.producto.idClasificacion )
      ;
      this.fechaLanzamiento = new Date(data.producto.fechaLanzamiento).toISOString().split('T')[0];
    });
  }

  updateProducto = (form: NgForm) => {
    this.productoSvc.updateProduct(form, this.id);
  }

}
