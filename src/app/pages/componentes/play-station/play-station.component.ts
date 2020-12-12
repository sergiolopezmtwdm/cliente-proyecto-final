import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { OyenteService } from 'src/app/services/core/oyente.service';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'componentes-play-station',
  templateUrl: './play-station.component.html',
  styleUrls: ['./play-station.component.scss']
})
export class PlayStationComponent implements OnInit, OnDestroy {

  criterio: string;

  gamesList: any[] = [];
  subscription$: Subscription;

  constructor(private oyenteSvc: OyenteService, private svcProductos: ProductosService) {

    this.getAllData();

    this.subscription$ = this.oyenteSvc.onListenCriterio().subscribe((criterio: string) => {

      if (criterio != '') {
        this.searchCriterio(criterio);
      } else {
        this.getAllData();
      }
      console.log('La subscripción es: ', criterio);
    });
  }

  ngOnInit(): void {
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



  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    autoplayTimeout: 5000,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
