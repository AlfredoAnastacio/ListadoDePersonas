import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../models/persona';
import { LoggingService } from '../services/logging-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string;
  apellidoInput: string;

  constructor(
    public loggingService: LoggingService
  ) { }

  ngOnInit(): void {
  }

  onAgregarPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.loggingService.enviaMensajeAConsola('enviamos persona: ' + persona1.nombre);
    this.personaCreada.emit(persona1);
  }

}
