import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/core/login.service';
import { SearchService } from 'src/app/services/core/search.service';
import { SidebarService } from 'src/app/services/core/sidebar.service';

const helper = new JwtHelperService();

@Component({
  selector: 'sections-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() menuItems: any[] = [];

  invalidLogin: boolean;
  modalReference: any;
  closeResult: string;

  constructor(private modalService: NgbModal, private router: Router, private http: HttpClient, private loginSvc: LoginService, private sidebarSvc: SidebarService, private searchSvc: SearchService) { }

  isUserAuthenticated() {
    // const token: string = localStorage.getItem("jwt");
    // const isExpired = helper.isTokenExpired(token);
    // if (token && !isExpired) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
    return this.loginSvc.isUserAuthenticated();
  }

  ngOnInit(): void {
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    this.sidebarSvc.getItems().subscribe((data:any)=>{
      this.menuItems = data;
    });
  }


  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    console.log("credenciales: ", credentials);
    this.http.post("https://localhost:44378/api/auth/login",
      credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      const refreshToken = (<any>response).refreshToken;
      const rol = (<any>response).rol;
      localStorage.setItem("jwt", token);
      localStorage.setItem("refreshToken", refreshToken);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
      // this.router.navigate(["carrito"]);
      this.modalReference.close();
      console.log(helper.decodeToken(token));

      this.sidebarSvc.getItems().subscribe((data:any)=>{
        this.menuItems = data;
      });

    }, err => {
      this.invalidLogin = true;
      // this.modalReference.close();
    });
  }

  open(content) {
    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onclick_search(searchCriterio: string){
    // console.log(`searchCriterio: ${searchCriterio}`);
    this.searchSvc.sendCriterio(searchCriterio);
  }
}
