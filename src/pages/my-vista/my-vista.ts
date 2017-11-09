import { Component } from '@angular/core';

@Component({
  selector: 'my-vista-crrc',
  templateUrl: 'my-vista.html'
})

export class MyVistaPage{
    listado: Array<{nombre: string, apellido: string}>;


    constructor(){
        this.listado = new Array();
        this.listado.push({nombre:'pepe',apellido:'lotas'});
        this.listado.push({nombre:'chino',apellido:'coshino'});
        this.listado.push({nombre:'marika',apellido:'ramero'});
        this.listado.push({nombre:'estreptococo',apellido:'mañanero'});
        this.listado.push({nombre:'ara',apellido:'cara'});
    }
}

