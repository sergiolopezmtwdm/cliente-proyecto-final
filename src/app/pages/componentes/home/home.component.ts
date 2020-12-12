import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from 'src/app/services/core/carrito.service';
import { HomeService } from 'src/app/services/core/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardItems: any[] = [];

  constructor(private modalService: NgbModal, private homeSvc: HomeService, private carritoSvc: CarritoService) {
    this.homeSvc.getItems().subscribe((data: any[]) => {
      this.cardItems = data;
    });
  }

  ngOnInit(): void {
  }

  addCar(id: string) {
    this.carritoSvc.addCarrito(id);
  }

  addWhishList(id: string) {
    this.carritoSvc.addWishList(id);
  }
}
