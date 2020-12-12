import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductosService } from 'src/app/services/core/productos.service';
import { SearchService } from 'src/app/services/core/search.service';
import { CarritoService } from 'src/app/services/core/carrito.service';

@Component({
  selector: 'componentes-allgames',
  templateUrl: './allgames.component.html',
  styles: [
  ]
})
export class AllgamesComponent implements OnInit, OnDestroy {
  productoItems: any[] = [];
  criterio: string;

  gamesList: any[] = [];
  subscription$: Subscription;

  constructor(private svcSearch: SearchService, private svcProductos: ProductosService, private carritoSvc: CarritoService) {


    this.getAllData();

    this.subscription$ = this.svcSearch.onListenCriterio().subscribe((criterio: string) => {

      if (criterio != '') {
        this.searchCriterio(criterio);
      } else {
        this.getAllData();
      }
      console.log('La subscripción es: ', criterio);

    });

    //this.subscription$ = svcSearch.onListenCriterio().subscribe((criterio: string) =>{
      //console.log(`La subscripcion al observable es: `, criterio);
      // if(criterio != ''){
      //   this.searchCriterio(criterio);
      // }else{
      //   this.getAllData();
      // }
    //  this.criterio = criterio;
    //  this.svcProductos.getItems().subscribe((data:any[])=>{
      //  this.productoItems = data.filter(
       //   x => x.titulo.includes(criterio));;
     // })


   // });

  }


  getAllData() {
    this.svcProductos.getAllGames().subscribe((data: any[]) => {
      this.gamesList = data;
    });
  }

  searchCriterio(criterio) {
    console.log('El criterio es: ', criterio);
    this.svcProductos.getGamesBycriterio(criterio).subscribe((data: any[]) => {
      this.gamesList = data;
    });

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit(): void {
  }

  addWhishList(id: string) {
    this.carritoSvc.addWishList(id);
  }

  addCar(id: string) {
    this.carritoSvc.addCarrito(id);
  }

}
