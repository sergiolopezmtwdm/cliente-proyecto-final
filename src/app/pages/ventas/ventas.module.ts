import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { VentasRouterModule } from './ventas.routes';



@NgModule({
  declarations: [VentasComponent, ListaComponent, DetalleComponent],
  imports: [
    CommonModule,
    VentasRouterModule
  ]
})
export class VentasModule { }
