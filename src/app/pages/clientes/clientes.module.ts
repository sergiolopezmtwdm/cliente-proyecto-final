import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ClientesRouterModule } from './clientes.routes';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [ClientesComponent, ListaComponent, DetalleComponent],
  imports: [
    CommonModule,
    ClientesRouterModule
  ]
})
export class ClientesModule { }
