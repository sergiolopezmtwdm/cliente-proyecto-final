import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/user';
const endPoint2: string = 'https://localhost:44300/api/product/wishlist/user';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  id;
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(endPoint);
  }

  public getProductoById(id: string) {
    // return this.http.get(`${endPoint}/${id}`);
    this.id = parseInt(id);
    return this.http.get(`${endPoint2}/${id}`);
    // return this.http.get("assets/json/producto.json");
  }
}
