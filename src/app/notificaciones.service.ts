import { Injectable } from '@angular/core';
import { INotificacion } from './interfaces/INotificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  notificationes: INotificacion[] = []
  constructor() { }

  agregarNotificacion(nuevaNotificacion: INotificacion){
    this.notificationes.push(nuevaNotificacion)
  }

  limpiarNotificaciones(){
    this.notificationes = []
  }
}

