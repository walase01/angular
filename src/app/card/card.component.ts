import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() persona : Persona[] = [];
  @Output() _eliminar = new EventEmitter<Persona>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(p : Persona){
    this._eliminar.emit(p);
  }

}
