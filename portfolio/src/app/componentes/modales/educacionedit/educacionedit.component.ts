import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-educacionedit',
  templateUrl: './educacionedit.component.html',
  styleUrls: ['./educacionedit.component.css']
})
export class EducacioneditComponent implements OnInit{
  educacionList: any;

  educacionForm: FormGroup;
  id?: number;
  logoEduca: '' = "";
  establecimEduca: '' = "";
  puestoEduca: '' = "";
  fechasEduca: '' = "";

  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder) {
    this.educacionForm = this.formBuilder.group({
      id: [''],
      logoEduca: [''],
      establecimEduca: [''],
      puestoEduca: [''],
      fechasEduca: [''],
    }
    )
  }

  get EstablecimEduca() {
    return this.educacionForm.get("establecimEduca");
  }


  ngOnInit(): void {
  }

  modificar(): void {
    const educac = new Educacion(this.logoEduca, this.establecimEduca,
      this.puestoEduca, this.fechasEduca);
    this.educacionService.modificarEducacion(educac).subscribe(data => { this.educacionList = data;
      alert("educacion modificada correctamente");
    });
  }  

  edEnviar(event: Event) {
    if (this.educacionForm.value) {
      this.modificar();
      (confirm("Perdon, no llege con el tiempo y no pude arreglar el modificador :( Pero al aceptar, este evento creo uno nuevo :( atte: Joni"))
    } else {
      alert("error al modificar, intente de nuevo");
      this.educacionForm.markAllAsTouched();
    }
  }


  buscar(id?: number) {
    if (id != undefined) {
      this.educacionService.buscarEducacion(id).subscribe(
        data => {  this.buscar = data;
          
        }
        
      )
    }
    }

 

}
