import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList: any;

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.verEducaciones();
  }

   
  verEducaciones(): void {
    this.educacionService.Educaciones().subscribe(data => {
      console.log(data);
      this.educacionList = data});
  }

  delete(id?: number) {
    if (id != undefined && (confirm("!!warning!! se borrara una Educacíon, Esta seguro?"))) {
      this.educacionService.borrarEducacion(id).subscribe(
        data => {
          alert("Eliminado correctamente"); //no sale esto :( ¿con onEnviar si?
           this.verEducaciones();
          
        }
        
      )
    }
  }



}
