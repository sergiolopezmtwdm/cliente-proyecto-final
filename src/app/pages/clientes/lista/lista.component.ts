import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/core/clientes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  items: any[] = [];

  constructor(private clientesSvc: ClientesService) {
    this.getAllData();
  }

  ngOnInit(): void {
  }

  getAllData() {
    this.clientesSvc.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
  }
}
