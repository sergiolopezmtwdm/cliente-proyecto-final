import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ExampleFormComponent } from './example-form/example-form.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sections/sidebar/sidebar.component';
// import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.route';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { XboxComponent } from './components/sections/xbox/xbox.component';
import { PlayStationComponent } from './components/sections/play-station/play-station.component';
import { PCComponent } from './components/sections/pc/pc.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleFormComponent,
    LoginComponent,
    CustomersComponent,
    XboxComponent,
    PlayStationComponent,
    PCComponent,
    SidebarComponent,
    // CarritoComponent,
    // WishlistComponent,
    // PcComponent,
    // XboxComponent,
    // PlayStationComponent,
    // PerfilComponent,
    PageNotFoundComponent,
    // AllgamesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent },
    //   // {path: '', component: LoginComponent },
    //   // {path: '', component: ExampleFormComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'customers', component: CustomersComponent, canActivate: [AuthGuardService]}
    // ]),
    AppRouterModule,
    CarouselModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ["localhost:5000"],
        // whitelistedDomains: ["localhost:44378"],
        // blacklistedRoutes: []
        allowedDomains: ["localhost:44378"],
        disallowedRoutes: []
      }
    }),
    NgbModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
