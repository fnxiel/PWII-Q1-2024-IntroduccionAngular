import { Component } from '@angular/core';
import { IMensaje } from './IMensaje';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {

  mensaje: IMensaje ={
    textoBase:'Lorem ipsum dolor ',
    titulo: 'Mensaje',
    urlImagen: ''
  }

  constructor(){
    this.mensaje.urlImagen= `https://picsum.photos/id/${getRandomInt(100)}/300/200`
    console.log(this.mensaje.urlImagen)
  }

  obtenerNumeroAleatorio(max: number) {
    return Math.floor(Math.random() * max);
  }
  
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}