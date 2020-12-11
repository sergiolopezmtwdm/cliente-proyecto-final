import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

// const endPoint: string = 'assets/json/orders.json';
const endPoint: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/order';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  datos: any [] = [];
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(endPoint);
  }


  public getVentasById(id: string){
    // return this.http.get(`${endPoint}/${id}`);
    return this.http.get(`${endPoint}/${id}`);
    // return this.http.get("assets/json/order.json");

    // return this.http.get(endPoint);
    // console.log("llamando el post: ", id);
    // return this.http.post<any>(`${endPoint}`, { id: parseInt(id)});


    // return this.http.post(`${endPoint}`,
    // JSON.stringify(order), {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json"
    //   })
    // }).subscribe(response => {
    //   console.log("respuesta: ", response);
    //   return response;
    //   // this.router.navigate(["/"]);
    //   // this.router.navigate(["carrito"]);

    //   // this.sidebarSvc.getItems().subscribe((data:any)=>{
    //   //   this.menuItems = data;
    //   // });

    // }, err => {
    //   // alert("fallo la consulta");
    //   return err;
    //   // this.invalidLogin = true;
    //   // this.modalReference.close();
    // });
  }

  public getDetalleByVentaId(id: string){
    // return this.http.get(`${endPoint}/${id}`);
    return this.http.get(`${endPoint}/detail/${id}`);
    // return this.http.get("assets/json/orderdetail.json");
    // var order: any = {id};
    // this.http.post(`${endPoint}/detail`,
    // JSON.stringify(order), {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json"
    //   })
    // }).subscribe(response => {
    //   console.log("respuesta: ", response);
    //   return response;
    //   // this.router.navigate(["/"]);
    //   // this.router.navigate(["carrito"]);

    //   // this.sidebarSvc.getItems().subscribe((data:any)=>{
    //   //   this.menuItems = data;
    //   // });

    // }, err => {
    //   alert("fallo la consulta");
    //   // this.invalidLogin = true;
    //   // this.modalReference.close();
    // });
  }

  public updateVenta = (form: NgForm) => {
    const formulario = JSON.stringify(form.value);
    console.log("formulario: ", formulario);

    // this.http.post(`${endPoint}/UpdateProduct`,
    // formulario, {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json"
    //   })
    // }).subscribe(response => {
    //   alert("insert correcto");
    // }, err => {
    //   alert("fallo el insert");
    // });

  }

  public insertVenta = (form: NgForm) => {
    const formulario = JSON.stringify(form.value);
    console.log("formulario: ", formulario);

    this.http.post(`${endPoint}/insertorder`,
    formulario, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      alert("insert correcto");
      // this.router.navigate(["/"]);
      // this.router.navigate(["carrito"]);

      // this.sidebarSvc.getItems().subscribe((data:any)=>{
      //   this.menuItems = data;
      // });

    }, err => {
      alert("fallo el insert");
      // this.invalidLogin = true;
      // this.modalReference.close();
    });

  }
}
