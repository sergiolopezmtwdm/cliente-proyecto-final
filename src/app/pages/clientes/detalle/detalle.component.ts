import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/core/clientes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  item: any;
  id:number;

  constructor(private router: ActivatedRoute, private clientesSvc: ClientesService) {
    this.router.params.subscribe((param: any) => {
      this.id = parseInt(param['id']);
      this.getItemById(param['id']);
    }
    );
  }

  ngOnInit(): void {
  }

  getItemById(id: string) {
    this.clientesSvc.getItems().subscribe((data:any) =>{
      this.item = data;
    });
  }

}
