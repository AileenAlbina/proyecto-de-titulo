import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Alumno } from 'src/app/models/alumno';
import { Apoderado } from 'src/app/models/apoderado';

@Injectable({
  providedIn: 'root'
})
export class ApoderadoService {

  private AUTH_SERVER: string = "http://localhost:8080";

  constructor(private http: HttpClient, private router: Router) { }

  public registrarApoderado(form: FormGroup): Observable<Apoderado> {

    let apoderadoRegister: Apoderado = {
      nombres: form.get('nombres').value,
      apellidoPaterno: form.get('apellidoPaterno').value,
      apellidoMaterno: form.get('apellidoMaterno').value,
      email: form.get('email').value,
      clave: form.get('rut').value,
      rut: form.get('rut').value,
      telefono:form.get('telefono').value,
      direccion: form.get('direccion').value,
      esApoderado: true,
      esProfOFunc: false,
	    esAdmin:false,
      nombreApSup:form.get('nombreApSup').value,
      parentescoApSupAlumno:form.get('relacionApSup').value,
      cantAlumno:form.get('cantAlumnos').value
    }
    
  
    return this.http.post<Apoderado>(`${this.AUTH_SERVER}/apoderados`,apoderadoRegister).pipe(tap(
      (data: Apoderado) => {
        if(data) {
          this.saveUserLoginInfo(data.rut,);
        }
      }
    ))
  }

  public saveApoderadoByLogin(rut:string, password: string): Observable<Apoderado>
  {
    return this.http.get<Apoderado>(`${this.AUTH_SERVER}/apoderados/login/${rut}/${password}`).pipe(tap(
      data => {
        if (data)
          this.saveUserLoginInfo(data.rut);
      }
    ));
  }

  
  private saveUserLoginInfo(rut: string): void {
      localStorage.setItem("rut",rut);  
    }


  public getAllList():Observable <Apoderado[]>
  {
    return this.http.get<Apoderado[]>(`${this.AUTH_SERVER}/apoderados`);
  }

  public passwordRecovery(rut: string):Observable<Apoderado>{
    return this.http.get<Apoderado>(`${this.AUTH_SERVER}/apoderados/pass-recovery/${rut}`);
  }

  public getAlumnos(rut: string): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.AUTH_SERVER}/apoderados/list-stundents/${rut}`);
  }

  public getAlumnoDetails(rut:string):Observable<Alumno>
  {console.log("en el ser "+rut);

    return this.http.get<Alumno>(`${this.AUTH_SERVER}/apoderados/stundent/${rut}`);
  }
  
}




