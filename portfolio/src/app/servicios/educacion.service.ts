import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

url = "http://localhost:8080/educacion/" ;

  constructor(private http:HttpClient) {

   }
   Educaciones(): Observable<Educacion[]> {
    return this.http.get<any>(this.url + "ver");
  }

  agregarEducacion(educacion:Educacion): Observable<Educacion> {
    return this.http.post<any>(this.url + "new",educacion);
  }

  buscarEducacion(id: number): Observable<any> {
    return this.http.get<any>(this.url + "buscar/"+id);
  }

  modificarEducacion(educacion:Educacion): Observable<any> {
    return this.http.put<any>(this.url + "modificar",educacion);
  }

  borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "delete/"+id);
  }


}
