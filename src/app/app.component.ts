import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeComponent } from './mensaje/mensaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Introduccion a Angular';
  mensaje = 'Hola mundo';
}
