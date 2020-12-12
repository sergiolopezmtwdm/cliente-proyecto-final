import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OyenteService {

  private subject$ = new Subject<string>();
  private rol$ = new Subject<string>();
  private nombre$ = new Subject<string>();

  constructor(private router: Router) { }

  /**
  * Método para publicación de Observable
  * @param criterio
  */
  async sendCriterio(criterio: string) {
    console.log(`criterio: ${criterio}`);
    await this.router.navigate(['componentes/allgames']);
    this.subject$.next(criterio);
  }

  /**
   * Método para subscribiernos al observable
   */
  onListenCriterio(): Observable<string> {
    return this.subject$.asObservable();
  }

  // Observable en cambios de rol
  sendRol(rol: string) {
    console.log(`Rol asignado: ${rol}`);
    this.rol$.next(rol);
  }

  onListenRol(): Observable<string> {
    return this.rol$.asObservable();
  }

  sendNombre(nombre: string){
    this.nombre$.next(nombre);
  }

  onListenNombre(): Observable<string> {
    return this.nombre$.asObservable();
  }
}
