import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { ApoderadoService } from 'src/app/core/services/apoderado/apoderado.service';
import { Alumno } from 'src/app/models/alumno';
import { Comunicacion } from 'src/app/models/comunicacion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comunicaciones',
  templateUrl: './comunicaciones.component.html',
  styleUrls: ['./comunicaciones.component.css']
})
export class ComunicacionesComponent implements OnInit {
  
public alumnos :Alumno[]=[];
public alumnoSelectForm:FormGroup;  
public alumnoSelectedForm:FormGroup;  
public comunicaciones:Comunicacion[]=[];


  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private apoderadoService: ApoderadoService,
    private alumnoService:AlumnoService
    
) {
}

ngOnInit(): void {

const rut:string = localStorage.getItem("rut");

  this.apoderadoService.getAlumnos(rut).
  subscribe(((data:Alumno[])=> this.alumnos=data  ));

  this.initForm();
}

private initForm(): void {
  this.alumnoSelectForm = this.fb.group({
    alumnoSelect:['']
  });
}

public actualizarAlumnos(event)
{

this.alumnoService.listarComunicaciones(
  this.alumnoSelectForm.get("alumnoSelect").value)
.subscribe((data: Comunicacion[]) => {
  if(data){
  this.comunicaciones=data;
}else{
  this.showErrorToast("Alumno No posee comunicaciones");
}
  
  
}); 
  
}

private showErrorToast(mensaje:string): void {
  Swal.fire({
    icon: 'error',
    titleText: mensaje,
  });
}
public initFormDetails(ad:Alumno)
{
  this.alumnoSelectedForm = this.fb.group({
    nombres:ad.nombres,
    apellidoPaterno: ad.apellidoPaterno,
    apellidoMaterno: ad.apellidoMaterno,
  });
}

public onSave(): void {
  
}

public firmar(event):void{
console.log("llega");
}
}

