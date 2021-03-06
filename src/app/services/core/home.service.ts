import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// const endPoint: string = 'assets/json/cards-main.json';
// const endPoint: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/product/populares';
// const endPoint: string = 'https://localhost:44300/api/product/populares';
const endPoint: string = 'http://192.168.3.17:44300/api/product/populares';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {    }

  getItems() {
    return this.http.get(endPoint);
  }
}
