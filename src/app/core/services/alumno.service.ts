import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Comunicacion } from 'src/app/models/comunicacion';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private AUTH_SERVER: string = "http://localhost:8080";

  constructor(
              private http: HttpClient, 
              private router: Router,
              private modalService: NgbModal) { }

  public listarComunicaciones(rut:string): Observable<Comunicacion[]>
  {console.log("entro y envia "+rut);
    return this.http.get<Comunicacion[]>(`${this.AUTH_SERVER}/alumnos/comunicaciones/${rut}`).pipe(tap(
      data => {
        if (data)
          console.log("");
      }
    ));
  }

  public ver(comunicacion:Comunicacion,modal){
    console.log("entra");
    this.modalService.open(modal);
  }
}
