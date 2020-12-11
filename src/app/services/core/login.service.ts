import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const endPoint: string = 'https://apimtwdmfinalproject.azurewebsites.net/api/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) { }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    // if (token && !this.jwtHelper.isTokenExpired(token)) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  getRol() {
    return localStorage.getItem("rol");
  }

  public login(credenciales: any) {
    return this.http.post(endPoint,
      credenciales, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  public setlocalStorage(response: any) {
    console.log("token: ", (<any>response).jwt);
    console.log("refresToken: ", (<any>response).refreshToken);
    console.log("todo: ", (<any>response));
    const token = (<any>response).token;
    const refreshToken = (<any>response).refreshToken;
    const rol = (<any>response).rol;
    localStorage.setItem("jwt", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("rol", rol);
  }
}
