import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-ficha-alumno',
  templateUrl: './crear-ficha-alumno.component.html',
  styleUrls: ['./crear-ficha-alumno.component.css']
})
export class CrearFichaAlumnoComponent implements OnInit {

  public formFichaAlumno:FormGroup;

  constructor(private fichaAlumnoBuilder: FormBuilder) {
    this.formFichaAlumno = this.fichaAlumnoBuilder.group({
      nombreAT:['',Validators.required],
      apellidoPAT:['',Validators.required],
      apellidoMAT:['',Validators.required],
      rutAT:['',Validators.required],
      correoAT:['',Validators.required, Validators.email],
      relacionAAT:['',Validators.required],
      direccionAT:['',Validators.required],
      
      //Apoderado suplente 

      nombreAS:['',Validators.required],
      apellidoPAS:['',Validators.required],
      apellidoMAS:['',Validators.required],
      rutAS:['',Validators.required],
      correoAS:['',Validators.required, Validators.email],
      relacionAAS:['',Validators.required],
      direccionAS:['',Validators.required]
    });
   }

  ngOnInit(): void {

  }

}
