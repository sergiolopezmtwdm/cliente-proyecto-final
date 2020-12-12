import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/core/home.service';
import { LoginService } from './services/core/login.service';
import { SidebarService } from './services/core/sidebar.service';

declare var App: any;

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // template: `
  // <router-outlet></router-outlet>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cliente-angular';

  constructor(private sidebarSvc: SidebarService, private loginSvc: LoginService, private homeSvc: HomeService) { }
  sidebarItems: any[] = [];

  ngOnInit() {
    App.init();
    this.getData();
  }

  getData() {
    if (!this.loginSvc.isUserAuthenticated()) {
      this.sidebarSvc.getItemsAnonimo().subscribe((data: any) => {
        this.sidebarItems = data;
      });
    } else {
      this.sidebarSvc.getItemsAutentificado(this.loginSvc.getRol()).subscribe((data: any) => {
        this.sidebarItems = data;
      });
    }

  }

  listenChildMenuEvent(eventArgs: any) {
    console.log('Los datos emitidos por el componente hijo son: ', eventArgs);
    console.log('El indice seleccionado en el componente pap+a es: ', eventArgs.index);
    console.log('El item seleccionado en el componente hijo es: ', eventArgs.name);
  }


}
