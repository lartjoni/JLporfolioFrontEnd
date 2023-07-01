import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Observable } from 'rxjs';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Card1Component } from '../../card1/card1.component';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-card1new',
  templateUrl: './card1new.component.html',
  styleUrls: ['./card1new.component.css']
})
export class Card1newComponent implements OnInit {
  card1form: FormGroup;
  id?: number;
  nombreYapellido: '' = "";
  fondo: '' = "";
  fotoPersona: '' = "";
  oficio: '' = "";
  localidad: '' = "";
  textoContacto: '' = "";
  contactoLink: '' = "";
  logoDerecha: '' = "";
  textoDerecho: '' = "";
  acercaDeMi: '' = "";


  // private autentificacionService:AutenticacionService, private ruta: Router    --dentro de constructor--
  constructor(private personaService: PersonaService, private formBuilder: FormBuilder) {
    this.card1form = this.formBuilder.group({
      id: [''],
      nombreYapellido: ['', [Validators.required, Validators.minLength(3)]],
      fondo: [''],
      fotoPersona: [''],
      oficio: [''],
      localidad: [''],
      textoContacto: [''],
      contactoLink: [''],
      logoDerecha: [''],
      textoDerecho: [''],
      acercaDeMi: [''],
    }
    )
  }


  get NombreYapellido() {
    return this.card1form.get("nombreYapellido");
  }

  get nombreYapellidoValid() {
    return this.NombreYapellido?.touched && !this.NombreYapellido.valid;
  }

  ngOnInit(): void {
  }

  agregar(): void {
    /* const person = new Persona(this.id?,this.nombreYapellido, this.fotoPersona,
      this.oficio, this.localidad, this.textoContacto, this.contactoLink, this.logoDerecha, this.textoDerecho, this.acercaDeMi);
    this.personaService.agregarPersona(person).subscribe(data => {
      alert("educacion creada correctamente");
      window.location.reload();
    }); */
  }

  onEnviar(event: Event) {
    if (this.card1form.value) {
      this.agregar();
    } else {
      alert("error al agregar, intente de nuevo");
      this.card1form.markAllAsTouched();
    }
  }

  










}
