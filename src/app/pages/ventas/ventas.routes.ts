import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { VentasComponent } from "./ventas.component";
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
   {
       path: '', component: VentasComponent,
       children:[
            { path: 'lista', component: ListaComponent },
            // { path: 'detalle', component: DetalleComponent }
            { path: 'detalle/:id', component: DetalleComponent},
        ]      
   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VentasRouterModule {}