import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../services/core/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardItems: any[] = [];

  invalidLogin: boolean;
  closeResult: string;
  modalReference: any;

  //constructor(private jwtHelper: JwtHelperService, private router: Router) { }
  constructor(private modalService: NgbModal, private jwtHelper: JwtHelperService, private router: Router, private http: HttpClient, private homeSvc: HomeService) {
    this.homeSvc.getItems().subscribe((data: any[]) => {
      this.cardItems = data;
    });
  }

  ngOnInit(): void {

  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
  }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    console.log("credenciales: ", credentials);
    this.modalReference.close("submitted");
    // this.http.post("https://localhost:44398/api/auth/login",
    //   credentials, {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json"
    //   })
    // }).subscribe(response => {
    //   const token = (<any>response).token;
    //   const refreshToken = (<any>response).refreshToken;
    //   localStorage.setItem("jwt", token);
    //   localStorage.setItem("refreshToken", refreshToken);
    //   this.invalidLogin = false;
    //   this.router.navigate(["/"]);
    // }, err => {
    //   this.invalidLogin = true;
    // });
  }

  open(content) {
    //this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    console.log("cerrando: ", reason);
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
