import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http: HttpClient) {
    
  }
  
  obtenerDatos(): Observable<Persona[]> {
    return this.http.get<any>("http://localhost:8080/personas/ver/");
    
  }
  
  
  /* 
  url:string="http://localhost:8080/"
    constructor(private http: HttpClient) {

   }

   obtenerDatos(): Observable<Persona[]> {
    return this.http.get<any>(this.url+"personas/ver");
   }
   */

//falta completar el CRUD pero va en porfolio?



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