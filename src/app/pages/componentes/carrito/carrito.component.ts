import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from 'src/app/services/core/carrito.service';
import { LoginService } from 'src/app/services/core/login.service';
import { ProductosService } from 'src/app/services/core/productos.service';

@Component({
  selector: 'componentes-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  items: any[] = [];
  total: number;

  modalReference: any;

  constructor(private router: Router, private modalService: NgbModal, private carritoSvc: CarritoService, private productoSvc: ProductosService, private loginSvc: LoginService) {
    this.getItems();
    // this.getCarritoDetalle();
  }
  closeResult: string;

  ngOnInit(): void {

  }

  open(content) {
    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
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

  pagar() {

    var listaProductos: any[] = [];
    // console.log(JSON.stringify(data));
    // console.log(JSON.stringify((<any>data).data.data));
    // console.log(JSON.stringify(Array.from((<any>data).data.data)));
    console.log(JSON.stringify(this.items));
    var total = 0;
    this.items.forEach(x => {
      // var element = { "id": (<any>x).idproducto, "idCarrito": (<any>x)._id };
      // listaProductos2.push(element);
      listaProductos.push(x.id);
      total = total + x.precioVenta;
    });
    console.log(JSON.stringify(listaProductos));

    var orden = {
      clienteId: parseInt(this.loginSvc.getId()),
      listaProductos,
      total
    };
    console.log(JSON.stringify(orden));

    this.carritoSvc.crearOrden(orden).subscribe(response => {
      this.modalReference.close();
      alert("Se ha realizado su pedido exitosamente");
      this.router.navigate(["/componentes/perfil"]);
      this.vaciarCarrito();
    }, err => {
      alert("Su tarjeta no paso");
    });

  }

  vaciarCarrito() {
    this.items.forEach(x => {
      // var element = { "id": (<any>x).idproducto, "idCarrito": (<any>x)._id };
      // listaProductos2.push(element);
      console.log("tratando de eliminar: " + x.idCarrito);
      this.deleteCarritoItem(x.id);
    });
  }

  getItems() {
    this.carritoSvc.getItems().subscribe((data: any[]) => {
      // var listaProductos = [{ "id": 20, "idCarrito": "5fd45552ff3086396c905565"}, { "id": 19, "idCarrito": "5fd406ba7a866e3ed8d7f6d8"}];
      var listaProductos2: any[] = [];
      // console.log(JSON.stringify(data));
      // console.log(JSON.stringify((<any>data).data.data));
      // console.log(JSON.stringify(Array.from((<any>data).data.data)));
      Array.from((<any>data).data.data).forEach(x => {
        var element = { "id": (<any>x).idproducto, "idCarrito": (<any>x)._id };
        listaProductos2.push(element);
      });
      this.getCarritoDetalle(listaProductos2);
    });
  }

  deleteCarritoItem(id: string) {
    // alert("borrando elemento: "+id);
    this.carritoSvc.deleteCarritoItem(id).subscribe(response => {
      // alert("success" + JSON.stringify(response));
      // alert("Eliminación correcta");
      this.getItems();
    }, err => {
      // alert("Eliminación fallida");
      // alert("error: " + JSON.stringify(err));
    });
    this.getItems();
  }

  // getCarritoDetalle(data: any[]) {
  getCarritoDetalle(listaProductos: any[]) {
    // var listaProductos = [{ "idProducto": 20 }, { "idProducto": 19 }];
    this.productoSvc.getProductosByIdList(listaProductos).subscribe((data: any[]) => {
      this.items = data;
      this.total = 0;
      this.items.forEach(x => {
        this.total = this.total + x.precioVenta;
      });
    });
  }
}
