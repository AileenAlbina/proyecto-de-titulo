import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/core/services/curso/curso.service';
import { ProfFuncService } from 'src/app/core/services/prof-func/prof-func.service';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {


  public comunicacionRegisterForm: FormGroup;
  public cursos:Curso[]=[];
  public alumnos: Alumno[];
  public idCurso:number;
  public isSelect: boolean = false;
  public selected: Alumno[]=[];

  constructor(
              private fb: FormBuilder, 
              private router: Router, 
              private profesorService:ProfFuncService,
              private cursoService: CursoService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    
    this.profesorService.listarCursosProfe(localStorage.getItem('rut')).
    subscribe(((data:Curso[])=> this.cursos=data  ));

  }


public alumnosSeleccionados(event)
{
  if(event.isTrusted)
      this.isSelect=true;
  
}

public actualizarAlumnos(event)
{
    this.cursoService.listarAlumnosCurso(this.comunicacionRegisterForm.get('idCurso').value).
    subscribe(((data:Alumno[])=>
    this.alumnos=data
    ));
  
}

  public onSave(): void {
    
    this.profesorService.tomarAsistencia (this.comunicacionRegisterForm.get('selectAlumno').value);
    
  }

  public showRegisterSuccessToast(): void {
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Su cuenta ha sido creada correctamente',
      timer: 1500,
      showConfirmButton: false
    });
  }

  public isValidField(field: string): string {
    const validatedField = this.comunicacionRegisterForm.get(field);

    return (!validatedField.valid && validatedField.touched)
    ? 'is-invalid': validatedField.touched ? 'is-valid': '';
  }

  public onCancel() {
    Swal.fire({
      title: '¿Desea cancelar el registro?',
      text: 'Si cancela esta acción perdera los datos guardados',
      icon: 'info',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed){
        this.router.navigateByUrl('/prof-func/notify');
      }
    })
  }

  private initForm(): void {
    this.comunicacionRegisterForm = this.fb.group({
      idCurso:['',[Validators.required]],
      selectAlumno:[''],

    });
  }

  public guardarSeleccion(event){
      this.comunicacionRegisterForm.get('selectAlumno').setValue(event);
  }
}

