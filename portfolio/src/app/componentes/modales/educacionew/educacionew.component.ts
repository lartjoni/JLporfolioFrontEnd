import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Observable } from 'rxjs';

//import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-educacionew',
  templateUrl: './educacionew.component.html',
  styleUrls: ['./educacionew.component.css']
})
export class EducacionewComponent implements OnInit {
  
  educacionNuevaForm: FormGroup;
  id?: number;
  logoEduca: '' = "";
  establecimEduca: '' = "";
  puestoEduca: '' = "";
  fechasEduca: '' = "";


  // private autentificacionService:AutenticacionService, private ruta: Router    --dentro de constructor--
  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder) {
    this.educacionNuevaForm = this.formBuilder.group({
      id: [''],
      logoEduca: [''],
      puestoEduca: [''],
      fechasEduca: [''],
      establecimEduca: ['', [Validators.required, Validators.minLength(3)]]
    }
    )
  }


  get EstablecimEduca() {
    return this.educacionNuevaForm.get("establecimEduca");
  }

  get establecimEducaValid() {
    return this.EstablecimEduca?.touched && !this.EstablecimEduca.valid;
  }

  ngOnInit(): void {
  }

  agregar(): void {
    const educac = new Educacion(this.logoEduca, this.establecimEduca,
      this.puestoEduca, this.fechasEduca);
    this.educacionService.agregarEducacion(educac).subscribe(data => {
      alert("educacion creada correctamente");
    });
  }




  onEnviar(event: Event) {
    if (this.educacionNuevaForm.value) {
      this.agregar();
    } else {
      alert("error al agregar, intente de nuevo");
      this.educacionNuevaForm.markAllAsTouched();
    }
  }



}


/* 
agregar(): void {
  this.educacionService.agregarEducacion(Educacion).subscribe(data => {
    console.log(data);
    this.educacionList = data});
}

onEnviar(event:Event)
{
  event.preventDefault;
  this.educacionService.agregarEducacion(this.educacionNuevaForm.value).subscribe(Date => {
    console.log("DATA" + JSON.stringify(Date));
    this.ruta.navigate(['/portfolio']);

  })
}

onEnviar(event:Event){
  event.preventDefault;
  if(this.agregar.value){
    this.agregar();
  }else{
    alert("error al agregar, intente de nuevo");
    this.educacionNuevaForm.markAllAsTouched();
  }
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
 */



/* 
onEnviar(event:Event){
  event.preventDefault;
  if(this.form.valid){
    this.onCreate();
  }else{
    alert("error al agregar, intente de nuevo");
    this.form.markAllAsTouched();
  }
} 
*/
