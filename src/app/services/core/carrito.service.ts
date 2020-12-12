import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

// const endPoint: string = 'http://localhost:3000/v1/carrito/getAll/1/5/2';
const endPoint: string = 'http://localhost:3001/v1/carrito/';
const endPoint2: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/product/wishlist/';
const endPoint3: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/order/cart';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  constructor(private http: HttpClient, private loginSvc: LoginService) { }

  public getItemsByUserId() {
    return this.http.get(`${endPoint}/${this.loginSvc.getId()}`);
  }

  getItems() {
    console.log(`${endPoint}/1/20/${this.loginSvc.getId()}`);
    return this.http.get(`${endPoint}/getAll/1/20/${this.loginSvc.getId()}`);
  }

  public addCarrito = (idProduct: string) => {
    var addCarItem: any = {
      idUsuario: this.loginSvc.getId(),
      idproducto: idProduct,
      cantidad: 1,
    };
    const datosDeEnvio = JSON.stringify(addCarItem);
    console.log("formulario: ", datosDeEnvio);

    this.http.post(`${endPoint}/add`,
      datosDeEnvio, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      alert("Se ha agregado correctamente");
    }, err => {
      alert("No se pudo agregar el producto");
    });


  }

  public crearOrden(orden: any) {
    console.log("entrando al servicio con: " + JSON.stringify(orden));
    // alert("LLAMANDO POST CON: "+ JSON.stringify(orden));
    return this.http.post(`${endPoint3}`,
      orden, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  public addWishList = (idProduct: string) => {
    var addWishItem: any = {
      idCliente: parseInt(this.loginSvc.getId()),
      idProducto: parseInt(idProduct),
    };
    const datosDeEnvio = JSON.stringify(addWishItem);
    console.log("formulario: ", datosDeEnvio);

    this.http.post(`${endPoint2}`,
      datosDeEnvio, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      alert("Se ha agregado correctamente");
    }, err => {
      alert("No se pudo agregar el producto");
    });
  }

  public deleteCarritoItem = (id: string) => {
    var item: any = {
      uid: id,
    };
    return this.http.post(`${endPoint}/remove`,
      item, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

}
