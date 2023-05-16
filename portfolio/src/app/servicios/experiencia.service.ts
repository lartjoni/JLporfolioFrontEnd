import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = "http://localhost:8080/experiencia/" ;

  constructor(private http:HttpClient) {

   }
   Experiencias(): Observable<Experiencia[]> {
    return this.http.get<any>(this.url + "ver");
  }

  agregarExperiencia(educacion:Experiencia): Observable<Experiencia> {
    return this.http.post<any>(this.url + "new",educacion);
  }

  buscarExperiencia(id: number): Observable<any> {
    return this.http.get<any>(this.url + "buscar/"+id);
  }

  modificarExperiencia(experiencia:Experiencia): Observable<any> {
    return this.http.put<any>(this.url + "modificar",experiencia);
  }

  borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "delete/"+id);
  }


}
