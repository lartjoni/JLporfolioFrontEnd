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

  educacionList: any; // Educacion[]=[] remprlazar en lugar de any, pero con any funciona igual o masomenos :)

  
/* teorias:
persona: persona=new persona("","","",""); 
  constructor(public personaService: PersonaService) { } */
  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.verEducaciones();
  }

   
  verEducaciones(): void {
    this.educacionService.Educaciones().subscribe(data => {
      console.log(data);
      this.educacionList = data});
  }

 
  
  /* newEnviar($event: any) {
    throw new Error('Method not implemented.');
  }
  Enviar($event: any) {
    throw new Error('Method not implemented.');
  } */

  /* delete(id?: number){
    if(id != undefined){
      if(confirm('!!warning!! se borrara una Educacíon, Esta seguro?')) 
      this.educacionService.borrarEducacion(id).subscribe(
        data => {
          this.verEducaciones();
         // window.location.reload; no veo diferencia
        }
      )
    }
  }   */

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


/*behaviorSubject esplica en masterclass8v2 q es, y me pa q es pa q lea o recuerde lo ingresado ¿en campo modal? veremos :)


---------------------------------------------
tira pista para el editar, q es igual q delete osea click y el metodo creado tipo delete, qda ver si hace falta crear if pa buscar datos.

y vuelve al html de experiencia y muestar este delete: (osaa el err )

delete(id?: number) {
    if (id != undefined && (confirm('!!warning!! se borrara una Educacíon, Esta seguro?'))) {
      this.educacionService.borrarEducacion(id).subscribe(
        data => {
           this.verEducaciones();
           alert('Eliminado correctamente'); //no sale esto :(
          
        }, err =>{
          alert("error al borrar, intente de nuevo")
           })
      
    }}

----------------------------------
asi tiene el de proyecto add q le anda min 57 lo de this-proye...suscribe..y..alerta..y... onEnviar

this.sproye.save(proye).subscribe(data=>{
alert("proyecto agregado");
window.location.reload();
  });
}

limpiar(): void{
  this.form.reset();
}

onEnviar(event:Event){
  event.preventDefault;
  if(this.form.valid){
    this.onCreate();
  }else{
    alert("error al agregar, intente de nuevo");
    this.form.markAllAsTouched();
  }
} 

y min 57:45 a 57:56 pasa al .html pa mostrar cosas y min 58 sube un poco y se ve mas cosas

luego vuelve al .ts en min58:57 y se ve el metodo onCreate con sus datos parecido al constructor, min 59 sube un poco el ts y se ve datos de forGroup y contructor d formBuilder

osea del 57 al 59 casi 1h







-----------------------------------------  
min 52 de video express #18 En TK y min 57 revisa el de proyecto q le anda
y al de crear educacion en la parte final donde dice suscribe agrega esto pa cartelito, a ver si sale :) x_x pero al final lo saco el err porq agrego evento onEnviar q pong despues
del ejemplo suscribe (dice q esta en el modulo 3)

.subscribe(
data=>{alert("educacion agregada")
window.location.reload();
}, err =>{
  alert("error al agregar, intente de nuevo");
  window.location.reload;
   });
  }

-----------------------------------------  
asi tiene el de proyecto add q le anda min 57 lo de this-proye...suscribe..y..alerta..y... onEnviar

onEnviar(event:Event){
  event.preventDefault;
  if(this.form.valid){
    this.onCreate();
  }else{
    alert("error al agregar, intente de nuevo");
    this.form.markAllAsTouched();
  }
}




-----------------------------------------  
window.location.reload   a ver si recarga la pagina pero igual arreglar bug de imagenYdatos */

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

---------------------------
  delete() {
    if (window.confirm("¿Realmente quiere eliminar esta entrada?")) {
    this.eduService.delete(this.item.id).subscribe({
      next: (x) => {
        this.eduService.fetchData();
      },
    });
  }
  }
*/