import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

<<<<<<< HEAD
// const endPoint: string = 'assets/json/productos.json';
=======
//const endPoint: string = 'assets/json/productos.json';
>>>>>>> my-temporary-work2
const endPoint: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(endPoint);
  }

<<<<<<< HEAD
  public getProductoById(id: string) {
=======
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
>>>>>>> my-temporary-work2
    // return this.http.get(`${endPoint}/${id}`);
    return this.http.get(`${endPoint}/${id}`);
    // return this.http.get("assets/json/producto.json");
  }

  public updateProduct = (form: NgForm) => {
    const formulario = JSON.stringify(form.value);
    console.log("formulario: ", formulario);

    // this.http.post(`${endPoint}/UpdateProduct`,
    // formulario, {
    //   headers: new HttpHeaders({
    //     "Content-Type: "application/json"
    //   })
    // }).subscribe(response => {
    //   alert("insert correcto");
    // }, err => {
    //   alert("fallo el insert");
    // });

  }

  public insertProduct = (form: NgForm) => {


    // var producto: any = {
    //   sku: form.value.sku,
    //   titulo: form.value.titulo,
    //   descripcion: form.value.descripcion,
    //   idPlataforma: form.value.plataforma.value,
    //   idGenero: form.value.genero.value,
    //   idClasificacion: form.value.clasificacion.value,
    //   imagen: "",
    //   imagen2: "",
    //   imagen3: "",
    //   videoUrl: "",
    //   costo: form.value.costo,
    //   precioVenta: form.value.precioVenta,
    //   fechaLanzamiento: form.value.fechaLanzamiento,
    // };
    // console.log("producto: ", JSON.stringify(producto));
    form.value.imagen = "";
    form.value.imagen2 = "";
    form.value.imagen3 = "";
    form.value.urlVideo = "";
    form.value.idPlataforma = form.value.plataforma.value;
    form.value.idGenero = form.value.genero.value;
    form.value.idClasificacion = form.value.clasificacion.value;
    form.value.edicion = "Standard";
    delete form.value.plataforma;
    delete form.value.genero;
    delete form.value.clasificacion;
    // console.log("producto: ", JSON.stringify(form.value));

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
