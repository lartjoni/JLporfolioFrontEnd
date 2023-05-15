import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
url:string="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"educacion/ver");//¿q poner despues de this.url? ¿poner aca los crud?¿POST GET PUT DELETE?
    
  }
  
}

/*  
return this.http.get(this.url+"educacion/ver"+"educacion/new"+ etceteraConTods)¿sera asi?

  -----------------------------------------------------------otra forma
  url:string="./assets/data/data.json"  //cambiar por "http://localhost:8080/"
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url); 
  }
  ------otra forma
  url:string="http://localhost:8080/" 
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"");
  }
*/
