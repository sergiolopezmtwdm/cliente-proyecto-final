import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesRouterModule } from './componentes.routes';
import { FormsModule } from '@angular/forms';
// import { CarouselComponent } from 'ngx-owl-carousel-o';
import { PerfilComponent } from './perfil/perfil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AllgamesComponent } from './allgames/allgames.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DetalleComponent } from './detalle/detalle.component';
import { XboxComponent } from './xbox/xbox.component';
import { PlayStationComponent } from './play-station/play-station.component';
import { PcComponent } from './pc/pc.component';
import { ComponentesComponent } from './componentes.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
// DropZone Modules
// import { NgxDropzoneModule } from 'ngx-dropzone';
// import { HtmlPipe } from './pipes/html.pipe';

// CarouselComponent
// HtmlPipe,
@NgModule({
  declarations: [
    ComponentesComponent, PerfilComponent, CarritoComponent, AllgamesComponent, WishlistComponent, DetalleComponent, XboxComponent, PlayStationComponent, PcComponent, HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentesRouterModule,
    FormsModule,
    CarouselModule,
    NgxDropzoneModule
  ]
})
export class ComponentesModule { }
