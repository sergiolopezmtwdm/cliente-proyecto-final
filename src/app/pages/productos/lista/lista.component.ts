import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  productoItems: any[] = [];

  constructor(private productoSvc: ProductosService) {
    this.getAllData();
   }

  ngOnInit(): void {
    //cargar filtros
  }

  getAllData(){
    this.productoSvc.getItems().subscribe((data:any[])=>{
      this.productoItems = data;
    });
  }

}
