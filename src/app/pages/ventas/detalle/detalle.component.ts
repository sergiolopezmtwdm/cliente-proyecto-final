import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from 'src/app/services/core/ventas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  venta: any;
  detalleventa: any;

  constructor(private router: ActivatedRoute, private ventasSvc: VentasService) {
    this.router.params.subscribe((param: any) => {
        this.getItemById(param['id']);
      }
    );
  }

  ngOnInit(): void {
  }

  getItemById(id: string) {
    // this.productoSvc.getProductoById(id).subscribe((data: any[]) => {
    //   this.producto = data;
    // });
    console.log("getItemById: ", id);

    // this.ventasSvc.getVentasById(id).subscribe((data:any[])=>{
    //   this.venta = data;
    // });

    this.ventasSvc.getVentasById(id).subscribe((data: any) => {
      console.log(data);
      this.venta = data;

      // this.plataformaSelected =
      //   this.plataformaBindingsList.find( x => x.value === data.idPlataforma );
      // ;
      // this.generoSelected =
      //   this.generoBindingsList.find( x => x.value === data.idGenero )
      // ;
      // this.clasificacionSelected =
      //   this.clasificacionBindingsList.find( x => x.value === data.IdClasificacion )
      // ;
      // this.fechaLanzamiento = new Date(data.fechaLanzamiento).toISOString().split('T')[0];
    });

    this.ventasSvc.getDetalleByVentaId(id).subscribe((data: any) => {
      console.log(data);
      this.detalleventa = data;
    });


  }

}
