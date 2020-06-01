import { Component, OnInit } from '@angular/core';
import { Persona } from './models/persona';
import { LoggingService } from './services/logging-service.service';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado de personas';
  personas: Persona[] = [];

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ){}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
}
