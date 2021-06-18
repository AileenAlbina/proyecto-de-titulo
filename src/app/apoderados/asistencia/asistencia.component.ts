import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaInterfaz } from './asistencia-interfaz';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})

export class AsistenciaComponent implements OnInit {

  public p:number = 1;
 

  constructor() { }

  ngOnInit(): void {
  }

}
