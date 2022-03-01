import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms'
import { Persona } from '../persona.interface';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    nombre : ['' , Validators.required],
    title  : ['' , Validators.required],
    bio : ['' , Validators.required]
  })

  persona : Persona[] = [
    {
      id: 1,
      name: 'jose',
      title: 'sistem ing',
      bio : 'algp'
    },
    {
      id: 6,
      name: "Claire Dejesus",
      title: "Parturient Montes Nascetur Institute",
      bio: "elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla"
    },
    {
      id: 8,
      name: "Yael Webster",
      title: "Tellus Incorporated",
      bio: "eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum"
    },
    {
      id: 10,
      name: "MacKensie Salas",
      title: "Sed Pharetra Felis PC",
      bio: "lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla"
    }
  ]

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }
  
  guardar(){
    
    if(this.miFormulario.invalid){
        return;
    }

   const nombre =  this.miFormulario.controls['nombre'].value;
   const titulo =  this.miFormulario.get("title")?.value;
   const bio =   this.miFormulario.get("bio")?.value ;

    this.persona.push({
      name : nombre,
      id  : Math.random() * 100,
      title : titulo,
      bio :bio

    });

   this.miFormulario.controls['nombre'].reset("");
   this.miFormulario.get("title")?.reset("");
   this.miFormulario.get("bio")?.reset("");

  }
}
