import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { NotificacionesService } from './notificaciones.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Introduccion a Angular';
  mensaje = 'Hola mundo';

  constructor(public servicioNotificaciones: NotificacionesService){}
}
