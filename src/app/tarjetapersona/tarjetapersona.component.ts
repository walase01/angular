import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.interface';

@Component({
  selector: 'app-tarjetapersona',
  templateUrl: './tarjetapersona.component.html',
  styleUrls: ['./tarjetapersona.component.css']
})
export class TarjetapersonaComponent implements OnInit {

  @Input() persona : Persona[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  eliminar( id : Persona ) {
   const index = this.persona.indexOf(id);
  this.persona.splice(index,1);
  }

}
