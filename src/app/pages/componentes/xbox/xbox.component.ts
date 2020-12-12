import { Component, OnDestroy, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { OyenteService } from 'src/app/services/core/oyente.service';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'componentes-xbox',
  templateUrl: './xbox.component.html',
  styleUrls: ['./xbox.component.scss']
})
export class XboxComponent implements OnInit, OnDestroy {

  //Salida, objetos capaces de emitir un evento(EventEmitter)
  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();
  criterio: string;
  interval: any;
  count = 0;

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

  onclick_menu(index: number, item: any){
    //console.log('El indice seleccionado en el hijo es: ', index);
    //console.log('El item seleccionado en hijo es: ', item);

    //Regresar al componente papá (app.component), pueda ser escuchado por el componente papá
    this.onClickMenu.emit({
      index,
      name: item.title
    });

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
    // navText: ['&#8249', '&#8250;'],
    navText: [ '<div class="nav-owl text-center font-weight-bold"><i class="bx bx-left-arrow-alt"></i></div>', '<div class="nav-owl text-center font-weight-bold"><i class="bx bx-right-arrow-alt"></i></div>' ],
    // navText: ['', ''],
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
      },
      1250: {
        items: 5
      }
    },
    nav: true
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
