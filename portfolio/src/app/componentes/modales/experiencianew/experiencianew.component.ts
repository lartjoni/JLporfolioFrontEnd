import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencianew',
  templateUrl: './experiencianew.component.html',
  styleUrls: ['./experiencianew.component.css']
})
export class ExperiencianewComponent implements OnInit {
  
  experienciaNuevaForm: FormGroup;
  id?: number;
  logoExper: '' = "";
  establecimExper: '' = "";
  puestoExper: '' = "";
  fechasExper: '' = "";

  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder) {
    this.experienciaNuevaForm = this.formBuilder.group({
      id: [''],
      logoExper: [''],
      puestoExper: [''],
      fechasExper: [''],
      establecimExper: ['', [Validators.required, Validators.minLength(3)]]
    }
    )
  }


  get EstablecimExper() {
    return this.experienciaNuevaForm.get("establecimExper");
  }

  get establecimExperValid() {
    return this.EstablecimExper?.touched && !this.EstablecimExper.valid;
  }

  ngOnInit(): void {
  }

  agregar(): void {
    const experi = new Experiencia(this.logoExper, this.establecimExper,
      this.puestoExper, this.fechasExper);
    this.experienciaService.agregarExperiencia(experi).subscribe(data => {
      alert("experiencia creada correctamente");
    });
  }




  onEnviar(event: Event) {
    if (this.experienciaNuevaForm.value) {
      this.agregar();
    } else {
      alert("error al agregar, intente de nuevo");
      this.experienciaNuevaForm.markAllAsTouched();
    }
  }



}


