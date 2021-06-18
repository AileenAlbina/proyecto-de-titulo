import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApoderadoService } from 'src/app/core/services/apoderado/apoderado.service';

import { ProfFuncService } from 'src/app/core/services/prof-func/prof-func.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

public alumnos :Alumno[]=[];
public alumnoSelectForm:FormGroup;  
public alumnoSelectedForm:FormGroup;  

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private apoderadoService: ApoderadoService,
    
) {
}

ngOnInit(): void {

const rut:string = "12366100-5";

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

this.apoderadoService.getAlumnoDetails(
  this.alumnoSelectForm.get("alumnoSelect").value)
.subscribe((data: Alumno) => {
  this.initFormDetails(data)
});
  
}

public initFormDetails(ad:Alumno)
{console.log(ad.nombres, ad.apellidoPaterno, ad.apellidoMaterno);
  this.alumnoSelectedForm = this.fb.group({
    nombres:ad.nombres,
    apellidoPaterno: ad.apellidoPaterno,
    apellidoMaterno: ad.apellidoMaterno,
  });
}

public onSave(): void {
  
}

}
