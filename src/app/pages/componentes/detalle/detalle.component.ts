import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  producto: any;

  id: number;

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
    });
  }


}
