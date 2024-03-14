import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacionesService } from '../notificaciones.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primerapantalla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primerapantalla.component.html',
  styleUrl: './primerapantalla.component.css'
})
export class PrimerapantallaComponent implements OnInit {
  titulo: string = ''
  id: number = 0
  productos: IProductos[]  = [{
    id: 1,
    descripcion:  "teclado"
  },
  {
    id: 2,
    descripcion:  "mouse"
  },
  {
    id: 3,
    descripcion:  "monitor"
  }
]
productoSeleccionado?: IProductos

constructor(private route: ActivatedRoute, public servicioNotificaciones: NotificacionesService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo']
      this.id = params['id']
      this.productoSeleccionado = this.productos.find(producto => producto.id == this.id)
      console.log(this.productoSeleccionado)
      //this.servicioNotificaciones.notificationes
    })
  }

}

interface IProductos{
  id: number
  descripcion: string
}
