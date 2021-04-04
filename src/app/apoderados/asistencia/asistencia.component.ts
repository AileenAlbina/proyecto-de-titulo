import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as asistenciaClases from 'src/app/data/DataAsistenaClases.json';
import { AsistenciaInterfaz } from './asistencia-interfaz';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})

export class AsistenciaComponent implements OnInit {

  public p:number = 1;
  public detalleAsistencia: any = this.getAsistenciaArray();


getJsonContent()
{
    return (asistenciaClases as any)
}

getAsistenciaJsonContent()
{
  return (asistenciaClases as any).asistencia;
}

getAsistenciaArray(): Observable<Array<AsistenciaInterfaz>> {  
  
  return (asistenciaClases as any).asistencia;
}


  constructor() { }

  ngOnInit(): void {
  }

}
