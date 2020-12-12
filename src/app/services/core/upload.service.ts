import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const END_POINT = "http://localhost:3001/v1/carrito/upload";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFiles(formData: FormData, id: string) {
    // formData.idProducto = id;
    // var item = {
    //   idProducto: id
    // };
    // return this.http.post(`${END_POINT}`, {formData, item})
    return this.http.post(`${END_POINT}`, formData)
  }
}
