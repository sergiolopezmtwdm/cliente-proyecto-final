import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject$ = new Subject<string>();

  constructor(private router: Router) { }

   /**
   * Método para publicación de Observable
   * @param criterio
   */
  async sendCriterio(criterio: string){
    console.log(`criterio: ${criterio}`);
    await this.router.navigate(['componentes/allgames']);
    this.subject$.next(criterio);

  }

  /**
   * Método para subscribiernos al observable
   */
  onListenCriterio() : Observable<string>{
    return this.subject$.asObservable();
  }
}
