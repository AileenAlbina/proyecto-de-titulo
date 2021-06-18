import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private AUTH_SERVER: string = "http://localhost:8080";

  constructor(private http: HttpClient, private router: Router) { }


  public getAllList():Observable <Curso[]>
  {
    return this.http.get<Curso[]>(`${this.AUTH_SERVER}/cursos`);

  }
  
  public listarAlumnosCurso(id: number):Observable <Alumno[]>
  {
    
    return this.http.get<Alumno[]>(`${this.AUTH_SERVER}/cursos/alumnos/${id}`);

  }
  public getByid(idCurso: number):Observable<Curso>{
    return this.http.get<Curso>(`${this.AUTH_SERVER}/cursos/${idCurso}`);
  }

  public updateCurso(pf: Curso)
  {
    
    return this.http.put<Curso>(`${this.AUTH_SERVER}/curso/${pf.idCurso}`,pf);
  }

  public deleteById(pf:Curso):void
  {

    this.http.delete(`${this.AUTH_SERVER}/cursos/${pf.idCurso}`)
  
  }

  public showDeleteSuccessToast(titulo:String): void {
    Swal.fire({
      toast: true,
      icon: 'success',
      title: titulo,
      timer: 1500,
      showConfirmButton: false
    });
  }

  public registrarCurso(form: FormGroup): Observable <Curso> {

    let cursoRegister: Curso= {
      grado: form.get('grado').value,
      numero: form.get('numero').value,
      letra:form.get('letra').value,
      sala:form.get('sala').value,
    }   
    
    return this.http.post<Curso>(`${this.AUTH_SERVER}/cursos`,cursoRegister).pipe(tap(
      (data: Curso) => {
        if(data) {
          this.showSuccessToast("El curso ha sido creado exitosamente");
        }
      }
    ))
  }
  public showSuccessToast(titulo:String): void {
    Swal.fire({
      toast: true,
      icon: 'success',
      title: titulo,
      timer: 1500,
      showConfirmButton: false
    });
  }


}

