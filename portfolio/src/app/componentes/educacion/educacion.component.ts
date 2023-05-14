import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  educacionList :Educacion[] = []; //puedo cambiar por otro alias
  constructor(private educacionService:EducacionService) {}

  ngOnInit(): void {
    this.verEducaciones()
  }

  verEducaciones(): void{
    this.educacionService.verEducaciones().subscribe(data => {
      this.educacionList = data;
    })
  }

  newEnviar($event: any) {
    throw new Error('Method not implemented.');
    }
  Enviar($event: any) {
    throw new Error('Method not implemented.');
    }

    delete(id?: number){
      if(id != undefined){
        if(confirm('!!warning!! se borrara una Educacíon, Esta seguro?')) 
        this.educacionService.borrarEducacion(id).subscribe(
          data => {
            this.verEducaciones();
            window.location.reload;
          }
        )
      }
    } 


}
//window.location.reload   a ver si recarga la pagina pero igual arreglar bug de imagenYdatos
        
        /* otra solucion sacado de youtobe el de 100
         
  ¿como poner esto:  {(confirm('!!warning!! se borrara una Educacíon, Esta seguro?'))}    en ese if ?

        delete(id?: number){
    if(id != undefined){
      this.educacionService.borrarEducacion(id).subscribe(
        data => {
          this.verEducaciones();
        }, err => {
          alert("error al borrar, intente de nuevo");
           }
      )
    }
  }
        */

 /*  agregarEducacion(): void{
    this.educacionService.agregarEducacion().subscribe(data => {
      this = data;
    })
  } 

    buscarEducacion(): void{
    this.educacionService.buscarEducacion().subscribe(data => {
      this.educacionList = data;
    })
  }

  modificarEducacion(): void{
    this.educacionService.modificarEducacion().subscribe(data => {
      this.educacionList = data;
    })
  }

  borrarEducacion(): void{
    this.educacionService.verEducaciones().subscribe(data => {
      this.educacionList = data;
    })
  } */



  
   /* educacion: Educacion = null; 

    form: FormGroup;
    logoEduca: string;
    establecimEduca: string;
    puestoEduca: string;
    fechasEduca: string; 

    educacionList:any; //puedo cambiar por otro alias
    constructor(private educacionService:EducacionService) {}
  
    ngOnInit(): void {
    }
  
  
  edEnivar(): void {
    const id = this.
    this.educacionService.modificarEducacion(id, this.educacionListion).subscribe(data => {
      this.educacionList = data;
    }, err => {
      alert("Error al modificar educacion");
    }
  )
} */
  

/* el que estaba antes
ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacionList=data.educaciones;
    });  
  }

*/