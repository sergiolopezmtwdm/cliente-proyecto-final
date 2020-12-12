import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from 'src/app/services/core/carrito.service';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'componentes-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  items: any[] = [];

  constructor(private modalService: NgbModal, private carritoSvc: CarritoService, private productoSvc: ProductosService) {
    this.getItems();
    // this.getCarritoDetalle();
  }
  closeResult: string;

  ngOnInit(): void {

  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getItems() {
    this.carritoSvc.getItems().subscribe((data: any[]) => {
      // this.items = data;
      var listaProductos = [{ "id": 20, idCarrito: "5fd405d77a866e3ed8d7f6d7"}, { "id": 19, idCarrito: "5fd406ba7a866e3ed8d7f6d8"}];
      this.getCarritoDetalle(listaProductos);
    });
  }

  deleteCarritoItem(id:string){
    this.carritoSvc.deleteCarritoItem(id);
  }

  // getCarritoDetalle(data: any[]) {
  getCarritoDetalle(listaProductos: any[]) {
    // var listaProductos = [{ "idProducto": 20 }, { "idProducto": 19 }];
    this.productoSvc.getProductosByIdList(listaProductos).subscribe((data: any[]) => {
      this.items = data;
    });
  }
}
