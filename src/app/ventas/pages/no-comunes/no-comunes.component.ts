import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nselect
  nombre: string = 'Maria';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Jose', 'Carla'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
    
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){
    if(this.nombre==='Maria'){

      this.nombre = 'Jose';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Maria';
      this.genero = 'femenino';
    }
  }

  borrarcliente(){

    this.clientes.shift();
  }

  //KeyValue pipe
  persona = {
    nombre: 'Enilio',
    edad: 28,
    direccion: 'Maracaibo, Venezuela'
  }

    //Json pipe
    heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      }
    ]

    //Async pipe
    miObservable = interval(2000); // 0,1,2,3,4,5,6,

    valorPromesa = new Promise((resolve,reject) => {

      setTimeout(() => {

        resolve('tenemos data de promesa');
      }, 3500);
    });
}
