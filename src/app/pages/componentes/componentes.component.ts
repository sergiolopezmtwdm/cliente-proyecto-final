import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss']
})
export class ComponentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listenChildMenuEvent(eventArgs: any){
    console.log('Los datos emitidos por el componente hijo son: ', eventArgs);
    console.log('El indice seleccionado en el componente pap+a es: ', eventArgs.index);
      console.log('El item seleccionado en el componente hijo es: ', eventArgs.name);
  }

}
