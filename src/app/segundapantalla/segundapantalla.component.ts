import { Component } from '@angular/core';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-segundapantalla',
  standalone: true,
  imports: [],
  templateUrl: './segundapantalla.component.html',
  styleUrl: './segundapantalla.component.css'
})
export class SegundapantallaComponent {

  constructor(public servicioNotificaciones: NotificacionesService){}
}
