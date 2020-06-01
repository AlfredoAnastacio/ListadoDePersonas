import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { LoggingService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez')
  ];

  constructor(
    private loggingServices: LoggingService
  ) {}

  agregarPersona(persona: Persona) {
    this.loggingServices.enviaMensajeAConsola('persona: ' + persona.nombre)
    this.personas.push(persona);
  }
}
