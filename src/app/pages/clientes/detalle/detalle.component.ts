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
  // id:number;
  id:string;
  codigoItems: any[] = [];
  wishListItems: any[] = [];

  constructor(private router: ActivatedRoute, private clientesSvc: ClientesService) {
    this.router.params.subscribe((param: any) => {
      // this.id = parseInt(param['id']);
      this.id = param['id'];
      this.getItemById(param['id']);
      this.getCodesByUserId(param['id']);
      this.getWishListByUserId(param['id']);
    }
    );
  }

  ngOnInit(): void {
  }

  getItemById(id: string) {
    this.clientesSvc.getItems().subscribe((data:any) =>{
      this.item = data.filter(x => x.id == id)[0];
      console.log("item: ",this.item);
    });
  }

  getCodesByUserId(id: string){
    this.clientesSvc.getCodesByUserId(id).subscribe((data:any[])=>{
      this.codigoItems = data;
    });
  }

  getWishListByUserId(id: string){
    this.clientesSvc.getWishListByUserId(id).subscribe((data:any[])=>{
      this.wishListItems = data;
    });
  }
}
