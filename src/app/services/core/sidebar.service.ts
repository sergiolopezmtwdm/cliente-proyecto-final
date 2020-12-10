import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

const endPoint: string = 'assets/json/menu.json';
const endPoint2: string = 'assets/json/menuAuthenticated.json';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient, private loginSvc: LoginService) { }

  getItems() {
    // if (this.loginSvc.isUserAuthenticated()) {
    //   return this.http.get(endPoint);
    // }
    // else {
    //   return this.http.get(endPoint2);
    // }
    return this.http.get(endPoint);
  }

}
