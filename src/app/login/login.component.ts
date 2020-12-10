import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.scss']
  // template: `
  //   <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
  //     <input name="first" ngModel required #first="ngModel">
  //     <input name="last" ngModel>
  //     <button>Submit</button>
  //   </form>

  //   <p>First name value: {{ first.value }}</p>
  //   <p>First name valid: {{ first.valid }}</p>
  //   <p>Form value: {{ f.value | json }}</p>
  //   <p>Form valid: {{ f.valid }}</p>
  // `,
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  ngOnInit(): void {
  }

  constructor(private router: Router, private http: HttpClient) { }

  public login = (form: NgForm) => {
    // console.log("valor de form value: ", form.value);
    // return;
    const credentials = JSON.stringify(form.value);
    // this.http.post("http://localhost:5000/api/auth/login",
    this.http.post("https://localhost:44378/api/auth/Login",
    credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      const refreshToken = (<any>response).refreshToken;
      localStorage.setItem("jwt", token);
      localStorage.setItem("refreshToken", refreshToken);
      this.invalidLogin = false;
      console.log("jwt: "+ token)
      console.log("refreshToken: "+ refreshToken)
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }

}
