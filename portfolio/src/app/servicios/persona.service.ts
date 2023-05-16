import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = "http://localhost:8080/persona/" ;

  constructor(private http: HttpClient) {
    
  }
  Personas(): Observable<Persona[]> {
    return this.http.get<any>(this.url + "ver");
  }

  agregarPersona(persona:Persona): Observable<Persona> {
    return this.http.post<any>(this.url + "new",persona);
  }

  buscarPersona(id: number): Observable<any> {
    return this.http.get<any>(this.url + "buscar/"+id);
  }

  modificarPersona(persona:Persona): Observable<any> {
    return this.http.put<any>(this.url + "modificar",persona);
  }

  borrarPersona(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "delete/"+id);
  }


}

/* 
 @Autowired
    private IPersonaService persoServ;
    
    @PostMapping ("/new/persona")
    public String agregarPersona (@RequestBody Persona pers) {
        persoServ.crearPersona(pers);
        return "se creo una persona correctamente";
    }
    
    @GetMapping ("/ver/personas")
    @ResponseBody
    public List<Persona> verPersonas () {
        return persoServ.verPersonas();
    }
    
    @DeleteMapping ("/delete/{id}")
    public String borrarPersona (@PathVariable Long id) {
            persoServ.borrarPersona(id);
        return "la persona se elimino correctamente";
    }
    
    @GetMapping ("/buscar/{id}")
    @ResponseBody
    public Persona buscarPersona(@PathVariable Long id) {
        return persoServ.buscarPersona(id);
    }
    
     @PutMapping ("/modificar")
    public String modificarPersona (@RequestBody Persona pers) {
        persoServ.crearPersona(pers);
        return "la persona se modifico";
    }   



---------------------------
ejemplo d Internet:

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

*/