import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductosComponent } from "./productos.component";
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
   {
       path: '', component: ProductosComponent,
       children:[
        { path: 'lista', component: ListaComponent } ,
        { path: 'nuevo', component: NuevoComponent },
        // { path: 'detalle', component: DetalleComponent }
        { path: 'detalle/:id', component: DetalleComponent},
    ]

   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductosRouterModule {}
