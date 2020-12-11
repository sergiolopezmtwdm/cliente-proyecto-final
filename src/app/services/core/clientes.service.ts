import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/user';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(endPoint);
  }
}
