import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Alumno } from 'src/app/models/alumno';
import { Comunicacion } from 'src/app/models/comunicacion';
import { Curso } from 'src/app/models/curso';
import { Profe } from 'src/app/models/profe';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})


export class ProfFuncService {
  
  private AUTH_SERVER: string = "http://localhost:8080";

  constructor(private http: HttpClient, private router: Router) { }



  public enviarComunicacion(form:FormGroup, alumnos:string[]):void{

    let com: Comunicacion = {
    
      asuntoComunicacion:form.get('asunto').value,
      contenidoComunicacion:form.get('mensaje').value
    }

    alumnos.forEach(element => {

        const rut = localStorage.getItem("rut");
    
        this.http.post<Comunicacion>(`${this.AUTH_SERVER}/prof-func/enviar-comunicacion/${element}/${rut}`,com).pipe(tap(
            (data: Comunicacion) => {
    
            if(data) {
    
            }
        }
      ))
    });
  
  }

  public registrarProfFunc(form: FormGroup): Observable<Profe> {

    let profFuncRegister: Profe = {
      nombres: form.get('nombres').value,
      apellidoPaterno: form.get('apellidoPaterno').value,
      apellidoMaterno: form.get('apellidoMaterno').value,
      email: form.get('email').value,
      clave: form.get('rut').value,
      rut: form.get('rut').value,
      telefono:form.get('telefono').value,
      direccion: form.get('direccion').value,
      esApoderado: false,
      esProfOFunc: true,
	    esAdmin:false,
      cantidaHorasContrata:form.get('horasContratadas').value,
      profJefe:false,
      comunicaciones:null,
      asignaturas:null,
      cursoProfJefe:null,

    }
    
    return this.http.post<Profe>(`${this.AUTH_SERVER}/prof-func`,profFuncRegister).pipe(tap(
      (data: Profe) => {
        if(data) {
          this.saveUserLoginInfo(data.rut,);
        }
      }
    ))
  }

  public saveProfFuncByLogin(rut:string, password: string): Observable<Profe>
  {
    return this.http.get<Profe>(`${this.AUTH_SERVER}/prof-func/login/${rut}/${password}`).pipe(tap(
      data => {
        if (data)
          this.saveUserLoginInfo(data.rut);
      }
    ));
  }

  
  private saveUserLoginInfo(rut: string): void {
      localStorage.setItem("rut",rut);  
    }

  public getAllList():Observable <Profe[]>
  {
      return this.http.get<Profe[]>(`${this.AUTH_SERVER}/prof-func`);
  }
  
  public getByid(rut: string):Observable<Profe>{
    return this.http.get<Profe>(`${this.AUTH_SERVER}/prof-func/${rut}`);
  }

  public updateProfFunc(pf: Profe)
  {
    
    return this.http.put<Profe>(`${this.AUTH_SERVER}/prof-func/${pf.rut}`,pf);
  }

  public deleteById(pf:Profe):void
  {

    this.http.delete(`${this.AUTH_SERVER}/prof-fun/${pf.rut}`).subscribe(data => {
      let result = data; 
      console.log("res = "+result);
      localStorage.clear()}
      );
    
        this.showDeleteSuccessToast();
  
  }

  public showDeleteSuccessToast(): void {
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'La cuenta ha sido eliminada exitosamente',
      timer: 1500,
      showConfirmButton: false
    });
  }

  public showSuccessToast(mensaje:string): void {
    Swal.fire({
      toast: true,
      icon: 'success',
      title: mensaje,
      timer: 2000,
      showConfirmButton: false
    });
  }


  public passwordRecovery(rut: string):Observable<Profe>{
    return this.http.get<Profe>(`${this.AUTH_SERVER}/prof-func/pass-recovery/${rut}`);
  }


  public listarCursosProfe(rut:string): Observable<Curso[]>
  {
    return this.http.get<Curso[]>(`${this.AUTH_SERVER}/prof-func/cursos-profesor/${rut}`).pipe(tap(
      data => {
        if (data)
          console.log("");
      }
    ));
  }

  public tomarAsistencia (alumnos :string[]) :void{
    this.http.post<string[]>(`${this.AUTH_SERVER}/prof-func/tomar-asistencia/`,alumnos);
  }

}
