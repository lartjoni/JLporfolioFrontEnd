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
    return this.http.get(this.url+"educaciones/ver");//probar dejar todo vacio como cuando se crea por 1° vez o poner aca POST GET PUT DELETE
  
  }
}

/* 

  ------otra forma
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
