import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const endPoint: string = 'assets/json/cards-main.json';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {    }

  getItems() {
    return this.http.get(endPoint);
  }
}
