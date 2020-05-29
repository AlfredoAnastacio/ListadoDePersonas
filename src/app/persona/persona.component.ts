import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombrePersona = 'Juan';
  apellidoPersona = 'Perez';
  edad = 28;

}
