import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/models/administrador';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  private AUTH_SERVER: string = "http://localhost:8080";

  constructor(private http: HttpClient, private router: Router) { }

  public saveAdminByLogin(rut:string, password: string): Observable<Administrador>
  {
    return this.http.get<Administrador>(`${this.AUTH_SERVER}/administradores/login/${rut}/${password}`).pipe(tap(
      data => {
        if (data)
          this.saveUserLoginInfo(data.rut);
      }
    ));
  }

  private saveUserLoginInfo(rut: string): void {
      localStorage.setItem("rut",rut);  
    }

}



