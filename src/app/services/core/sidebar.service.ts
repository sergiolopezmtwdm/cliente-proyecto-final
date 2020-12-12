import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

// const endPoint: string = 'assets/json/menu.json';
const endPoint: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/menu';
const endPoint2: string = 'assets/json/menuAuthenticated.json';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient, private loginSvc: LoginService) { }

  getItemsAnonimo() {
    // if (this.loginSvc.isUserAuthenticated()) {
    //   return this.http.get(endPoint);
    // }
    // else {
    //   return this.http.get(endPoint2);
    // }
    return this.http.get(`${endPoint}/anonimo`);
  }

  getItemsAutentificado(rol) {
    // if (this.loginSvc.isUserAuthenticated()) {
    //   return this.http.get(endPoint);
    // }
    // else {
    //   return this.http.get(endPoint2);
    // }
    // var rol = this.loginSvc.getRol();
    // alert("obteniendo menu del rol: " + rol);
    // alert(`${endPoint}/${rol}`);
    console.log(`llamando a ${endPoint}/${rol}`);
    return this.http.get(`${endPoint}/${rol}`);
  }

}
