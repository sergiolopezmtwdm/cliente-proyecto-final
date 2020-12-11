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

  constructor(private sidebarSvc: SidebarService, private loginSvc: LoginService, private homeSvc: HomeService) {}
  sidebarItems: any[] = [];

  ngOnInit(){
    App.init();
    this.getData();
  }

  getData() {
    if(!this.loginSvc.isUserAuthenticated()){
      this.sidebarSvc.getItemsAnonimo().subscribe((data:any)=>{
        this.sidebarItems = data;
      });
    }else{
        this.sidebarSvc.getItemsAutentificado().subscribe((data:any)=>{
          this.sidebarItems = data;
        });

    }

  }
}
