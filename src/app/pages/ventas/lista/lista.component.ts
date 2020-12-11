import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/core/ventas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  ventasItems: any[] = [];

  constructor(private ventasSvc: VentasService) {
    this.getAllData();
  }

  ngOnInit(): void {
  }

  getAllData(){
    this.ventasSvc.getItems().subscribe((data:any[])=>{
      this.ventasItems = data;
    });
  }

}
