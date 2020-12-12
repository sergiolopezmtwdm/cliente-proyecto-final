import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/core/clientes.service';
import { LoginService } from 'src/app/services/core/login.service';

@Component({
  selector: 'componentes-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  item: any;
  codigoItems: any[] = [];
  wishListItems: any[] = [];

  constructor(private clientesSvc: ClientesService, private loginSvc: LoginService) {
    var id = this.loginSvc.getId();
    this.getItemById(id);
    this.getCodesByUserId(id);
    this.getWishListByUserId(id);
  }

  ngOnInit(): void {
  }

  getItemById(id: string) {
    this.clientesSvc.getItems().subscribe((data: any) => {
      this.item = data.filter(x => x.id == id)[0];
      // console.log("item: ", this.item);
    });
  }

  getCodesByUserId(id: string) {
    this.clientesSvc.getCodesByUserId(id).subscribe((data: any[]) => {
      this.codigoItems = data;
    });
  }

  getWishListByUserId(id: string) {
    this.clientesSvc.getWishListByUserId(id).subscribe((data: any[]) => {
      this.wishListItems = data;
    });
  }

}

