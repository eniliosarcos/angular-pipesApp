import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  nombre:string = 'Enilio Sarcos';
  
  mostrarNombre(){
    console.log(this.nombre);
  }

  constructor(private primengConfig: PrimeNGConfig){

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
