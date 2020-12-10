import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CodigosComponent } from "./codigos.component";
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';



const routes: Routes = [
   {
       path: '', component: CodigosComponent,
       children:[
            { path: 'lista', component: ListaComponent },
            { path: 'nuevo', component: NuevoComponent }   
        ]      
   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CodigosRouterModule {}