import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariableAst } from '@angular/compiler';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ClientesService } from 'src/app/services/core/clientes.service';
import { LoginService } from 'src/app/services/core/login.service';
import { OyenteService } from 'src/app/services/core/oyente.service';
import { SidebarService } from 'src/app/services/core/sidebar.service';

const helper = new JwtHelperService();

@Component({
  selector: 'sections-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy  {

  @Input() menuItems: any[] = [];

  invalidLogin: boolean;
  modalReference: any;
  closeResult: string;

  subscriptionRol$: Subscription;

  constructor(private modalService: NgbModal, private router: Router, private http: HttpClient, private loginSvc: LoginService, private sidebarSvc: SidebarService, private oyenteSvc: OyenteService, private clienteSvc: ClientesService) {
    this.subscriptionRol$ = this.oyenteSvc.onListenRol().subscribe((rol: string) => {
      // if (criterio != '') {
      //   this.searchCriterio(criterio);
      // } else {
      //   this.getAllData();
      // }
      console.log('La subscripción es: ', rol);
      this.sidebarSvc.getItemsAutentificado(rol).subscribe((data: any[]) => {
        console.log("inicializando menú: ", JSON.stringify(data));
        this.menuItems = data;
      });
    });
  }

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

  public register = async (form: NgForm) => {
    const formulario = JSON.stringify(form.value);
    console.log("formulario:", formulario);
    var registerObject: any = {
      email: form.value.emailRegister,
      contrasenia: form.value.contraseniaRegister,
      nombreCompleto: form.value.nombreRegister,
      rol: "Cliente"
    };
    this.clienteSvc.registrarUsuario(registerObject).subscribe(response => {
      alert("Registrado correctamente");
      var credenciales: any = {
        email: registerObject.email,
        contrasenia: registerObject.contrasenia
      };
      this.loginSvc.login(credenciales).subscribe(response => {
        this.loginSvc.setlocalStorage(response);
        alert("has iniciado sesión correctamente");
        this.invalidLogin = false;
        this.modalReference.close();
        this.router.navigate(["/"]);
      }, err => {
        this.invalidLogin = true;

        // this.modalReference.close();
      });
    }, err => {
      alert("No se ha podido registrar en este momento");
    });

  }

  public logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("rol");
    // this.oyenteSvc.sendRol("anonimo")
    this.oyenteSvc.sendNombre("");
    localStorage.removeItem("id");
    this.sidebarSvc.getItemsAnonimo().subscribe((data: any) => {
      this.menuItems = data;
    });
    this.router.navigate(["/"]);
    alert("has salido de tu sesión exitosamente");
  }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    console.log("credenciales: ", credentials);
    this.loginSvc.login(credentials).subscribe(async response => {
      await this.loginSvc.setlocalStorage(response);

      alert("has iniciado sesión correctamente " + (<any>response).nombreCompleto);
      // console.log("token: ",(<any>response).token);
      // this.sidebarSvc.getItems().subscribe((data:any)=>{
      //   this.menuItems = data;
      // });
      // this.invalidLogin = false;
      // this.router.navigate(["/"]);
      // this.router.navigate(["carrito"]);
      this.modalReference.close();
      // console.log(helper.decodeToken(token));
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

  onclick_search(searchCriterio: string) {
    // console.log(`searchCriterio: ${searchCriterio}`);
    this.oyenteSvc.sendCriterio(searchCriterio);
  }

  ngOnDestroy(): void {
    this.subscriptionRol$.unsubscribe();
  }
}
