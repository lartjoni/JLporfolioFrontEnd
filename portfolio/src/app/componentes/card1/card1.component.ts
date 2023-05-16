import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

miPersona:any;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.verPersonas();
  }

   
  verPersonas(): void {
    this.personaService.Personas().subscribe(data => {
      console.log(data);
      this.miPersona = data});
  }

  /* buscar(id?: number) {
    if (id != undefined) {
      this.personaService.buscarPersona(id).subscribe(
        data => {
          alert("Eliminado correctamente"); //no sale esto :( ¿con onEnviar si?
           this.verPersonas();
          
        }
        
      )
    }
  } */


}
