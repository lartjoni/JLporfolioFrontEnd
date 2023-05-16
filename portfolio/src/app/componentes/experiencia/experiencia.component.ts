import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Observable } from 'rxjs';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList:any;
  
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.verExperiencias();
  }

   
  verExperiencias(): void {
    this.experienciaService.Experiencias().subscribe(data => {
      console.log(data);
      this.experienciaList = data});
  }

  delete(id?: number) {
    if (id != undefined && (confirm("!!warning!! se borrara una Experiencia, Esta seguro?"))) {
      this.experienciaService.borrarExperiencia(id).subscribe(
        data => {
          alert("Eliminado correctamente"); //no sale esto :( ¿con onEnviar si?
           this.verExperiencias();
          
        }
        
      )
    }
  }



}
