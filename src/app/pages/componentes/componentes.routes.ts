import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllgamesComponent } from './allgames/allgames.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComponentesComponent } from './componentes.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { PcComponent } from './pc/pc.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlayStationComponent } from './play-station/play-station.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { XboxComponent } from './xbox/xbox.component';




const routes: Routes = [
  {
    path: '',
    component: ComponentesComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'xbox', component: XboxComponent
      },
      {
        path: 'ps', component: PlayStationComponent
      },
      {
        path: 'pc', component: PcComponent
      },
      {
        path: 'carrito', component: CarritoComponent
      },
      {
        path: 'favoritos', component: WishlistComponent
      },
      {
        path: 'perfil', component: PerfilComponent
      },
      {
        path: 'detalle/:id', component: DetalleComponent
      },
      {
        path: 'allgames', component: AllgamesComponent
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRouterModule { }
