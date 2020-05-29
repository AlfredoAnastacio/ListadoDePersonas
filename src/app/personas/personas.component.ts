import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  // styleUrls: ['./personas.component.css']
  styles: [`
    h1{
      color:blue;
    }
    `]
})
export class PersonasComponent {

  agregarPersona = false;
  agregarPersonaStatus = 'No se ha agregado alguna persona';

  constructor() {
    setTimeout(
      () => {
        this.agregarPersona = true;
      }
    );
  }

  onCrearPersona() {
    this.agregarPersonaStatus = 'Persona agregada';
  }


}
