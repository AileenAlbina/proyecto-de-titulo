import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/core/services/curso/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  public cursoRegisterForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
              private router: Router, 
              private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.initDonorForm();
  }

  public onSave(): void {
    this.cursoService.registrarCurso(this.cursoRegisterForm).subscribe(data => {
      if (data) {
        this.showRegisterSuccessToast();
      }
    })
    
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
    const validatedField = this.cursoRegisterForm.get(field);

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
        this.router.navigateByUrl('/admin-courses');
      }
    })
  }

  private initDonorForm(): void {
    this.cursoRegisterForm = this.fb.group({
      letra: ['',[Validators.required]],
     
    });
  }

}

