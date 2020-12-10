import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductosService } from 'src/app/services/core/productos.service';
import { SearchService } from 'src/app/services/core/search.service';

@Component({
  selector: 'componentes-allgames',
  templateUrl: './allgames.component.html',
  styles: [
  ]
})
export class AllgamesComponent implements OnInit, OnDestroy {
  productoItems: any[] = [];
  criterio: string;

  subscription$: Subscription;

  constructor(private svcSearch: SearchService, private svcProductos: ProductosService) {

    this.subscription$ = svcSearch.onListenCriterio().subscribe((criterio: string) =>{
      //console.log(`La subscripcion al observable es: `, criterio);
      // if(criterio != ''){
      //   this.searchCriterio(criterio);
      // }else{
      //   this.getAllData();
      // }
      this.criterio = criterio;
      this.svcProductos.getItems().subscribe((data:any[])=>{
        this.productoItems = data.filter(
          x => x.titulo.includes(criterio));;
      })


    });

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit(): void {
  }

}
