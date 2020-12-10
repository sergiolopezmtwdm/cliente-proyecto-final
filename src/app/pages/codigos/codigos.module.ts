import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodigosComponent } from './codigos.component';
import { CodigosRouterModule } from './codigos.routes';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';



@NgModule({
  declarations: [CodigosComponent, ListaComponent, NuevoComponent],
  imports: [
    CommonModule,
    CodigosRouterModule
  ]
})
export class CodigosModule { }
