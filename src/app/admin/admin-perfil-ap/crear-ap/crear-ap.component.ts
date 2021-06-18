import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApoderadoService } from 'src/app/core/services/apoderado/apoderado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-ap',
  templateUrl: './crear-ap.component.html',
  styleUrls: ['./crear-ap.component.css']
})
export class CrearApComponent implements OnInit {

  public apoderadoRegisterForm: FormGroup;
  private emailPattern = /\S+@\S+\.\S+/;
  private rutPattern = "^[0-9]+-[0-9kK]{1}$";

  constructor(
              private fb: FormBuilder, 
              private router: Router, 
              private apoderadoService:ApoderadoService
  ) {
  }

  ngOnInit(): void {
    this.initDonorForm();
  }

  public onSave(): void {
    console.log("entro al llamado")
    this.apoderadoService.registrarApoderado(this.apoderadoRegisterForm).subscribe(data => {
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
    const validatedField = this.apoderadoRegisterForm.get(field);

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
        this.router.navigateByUrl('/admin-profile-prof-func');
      }
    })
  }

  private initDonorForm(): void {
    this.apoderadoRegisterForm = this.fb.group({
      nombres: ['',[Validators.required]],
      apellidoPaterno: ['',[Validators.required]],
      apellidoMaterno: ['',[Validators.required]],
      rut: ['',[Validators.required, Validators.pattern(this.rutPattern)]],
      email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
      direccion: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      cantAlumnos:0,
      nombreApSup: ['',[Validators.required]],
      relacionApSup: ['',[Validators.required]]
    });
  }

}

