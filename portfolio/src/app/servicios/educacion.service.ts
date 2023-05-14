import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

url = "http://localhost:8080/" ;

  constructor(private http: HttpClient) {

   }
   Educaciones(): Observable<Educacion[]> {
    return this.http.get<any>(this.url + "educaciones/ver");
  }

  agregarEducacion(educacion:Educacion): Observable<Educacion> {
    return this.http.post<any>(this.url + "educacion/new",educacion);
  }

  buscarEducacion(id: number): Observable<any> {
    return this.http.get<any>(this.url + "educacion/buscar/{id}"+id);
  }

  modificarEducacion(educacion:Educacion): Observable<any> {
    return this.http.put<any>(this.url + "educacion/modificar",educacion);
  }

  borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "educacion/delete/"+id);
  }


}

/* 
url = "http://localhost:8080/" ;

 constructor(private http: HttpClient) {

   }
   


   }
   verEducaciones(): Observable<Educacion[]> {
      return this.http.get<Educacion[]>(this.url + 'educaciones/ver');
    }

    agregarEducacion(educacion:Educacion): Observable<any> {
      return this.http.post<any>(this.url + 'educacion/new',Educacion);
    }

    buscarEducacion(id: number): Observable<any> {
      return this.http.get<Educacion>(this.url + `educacion/buscar/${id}`);
    }

    modificarEducacion(id: number, educacion:Educacion): Observable<any> {
      return this.http.put<any>(this.url + `educacion/modificar"${id}`,Educacion);
    }

    borrarEducacion(id: number): Observable<any> {
      return this.http.delete<any>(this.url + `educacion/delete/${id}`);
    }

*/