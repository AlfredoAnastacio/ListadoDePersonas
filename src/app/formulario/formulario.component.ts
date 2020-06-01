import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../models/persona';
import { LoggingService } from '../services/logging-service.service';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;

  constructor(
    public loggingService: LoggingService,
    private personasService: PersonasService
  ) { }

  ngOnInit(): void {
  }

  onAgregarPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personasService.agregarPersona(persona1);
  }

}
