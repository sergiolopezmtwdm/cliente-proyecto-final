import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OyenteService } from 'src/app/services/core/oyente.service';

@Component({
  selector: 'sections-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy  {

  nombre: string;
  subscriptionNombre$: Subscription;

  constructor(private oyenteSvc: OyenteService) {
    this.subscriptionNombre$ = this.oyenteSvc.onListenNombre().subscribe((nombre: string) => {
      this.nombre = nombre;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptionNombre$.unsubscribe();
  }

}
