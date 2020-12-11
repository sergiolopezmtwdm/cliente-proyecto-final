import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

//const endPoint: string = 'assets/json/productos.json';
const endPoint: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {    }

  getItems() {
    return this.http.get(endPoint);
  }

  getAllGames(){
    return this.http.get(`${endPoint}`);
  }

  /**
   * 
   * @param criterio 
   */
  getGamesBycriterio(criterio: string) {
    return this.http.get(`${endPoint}/titulo/${criterio}`);

  }

  public getProductoById(id: string){
    // return this.http.get(`${endPoint}/${id}`);
    // return this.http.get(`${endPoint}/${id}`);
    return this.http.get("assets/json/producto.json");
  }

  public updateProduct = (form: NgForm) => {
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

  public insertProduct = (form: NgForm) => {
    const formulario = JSON.stringify(form.value);
    console.log("formulario: ", formulario);

    this.http.post(`${endPoint}/InsertProduct`,
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
