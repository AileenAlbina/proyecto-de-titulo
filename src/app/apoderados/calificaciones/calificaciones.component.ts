import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  public notas:any =[1,2,3,4,5];
  public listAsignaturas:any=["lenguaje","matematicas","historia"];
  constructor() { }

  ngOnInit(): void {
  }

}
