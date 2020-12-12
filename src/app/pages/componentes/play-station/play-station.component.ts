import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'componentes-play-station',
  templateUrl: './play-station.component.html',
  styleUrls: ['./play-station.component.scss']
})
export class PlayStationComponent implements OnInit {

  criterio: string;

  gamesList: any[] = [];

  constructor(private svcProductos: ProductosService) {

    this.getAllData();
  }

  ngOnInit(): void {
  }

  getAllData() {
    this.svcProductos.getAllGames().subscribe((data: any[]) => {
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

}
