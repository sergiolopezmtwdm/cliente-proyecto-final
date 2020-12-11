import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosRouterModule } from './productos.routes';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [ProductosComponent, NuevoComponent, ListaComponent, DetalleComponent],
  imports: [
    CommonModule,
    ProductosRouterModule,
    FormsModule,
    NgSelectModule
  ]
})
export class ProductosModule { }
