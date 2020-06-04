import { Injectable, EventEmitter } from '@angular/core';
import { Persona } from '../models/persona';
import { LoggingService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(
    private loggingServices: LoggingService
  ) {}
  static saludar: any;

  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez')
  ];

  saludar = new EventEmitter<number>();



  agregarPersona(persona: Persona) {
    this.loggingServices.enviaMensajeAConsola('persona: ' + persona.nombre)
    this.personas.push(persona);
  }
}
