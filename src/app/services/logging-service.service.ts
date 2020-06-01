import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  enviaMensajeAConsola(mensaje: string) {
    console.log(mensaje);
  }

  constructor() { }
}
