import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApoderadoService } from 'src/app/core/services/apoderado/apoderado.service';
import { ProfFuncService } from 'src/app/core/services/prof-func/prof-func.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  public loginForm: FormGroup;
  public isCheckApoderado: boolean;
  public isCheckProfesor: boolean;
  public isCheckOtro: boolean;
  private rutPattern = "^[0-9]+-[0-9kK]{1}$";

  public checkboxValues = [
    {
      name: 'Apoderado',
      value: 'apoderado',
      id: 'apoderado-radio'
    },
    {
      name: 'Profesor',
      value: 'profesor',
      id: 'profesor-radio'
    },
    {
      name: 'Otro',
      value: 'otro',
      id: 'otro-radio'
    }
  ];


  constructor(
              private fb:FormBuilder, 
              private router: Router,
              private apoderadoService: ApoderadoService,
              private profFuncService: ProfFuncService

  ) {
   this.initForm();
  }

  ngOnInit(): void {   
  }

  public onSave(): void {
    const rut: string = this.loginForm.get("rut").value;
    
    if(this.isCheckApoderado)
    {
      this.apoderadoService.passwordRecovery(rut).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/auth/login');
        }}),  
        error => {
          this.showLoginErrorToast("Usuario no existe o Rut incorrecto");
        }
    }
    else
    {
      this.profFuncService.passwordRecovery(rut).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('auth/login');
        }}),  
        error => {
          this.showLoginErrorToast("Usuario no existe o Rut incorrecto");
        }
    }
    
  }


  private showLoginErrorToast(tipoError:string): void {
    Swal.fire({
      icon: 'error',
      titleText: tipoError,
      text: 'Datos incorrectos'
    });
  }

  public isValidField(field: string): string {
    const validatedField = this.loginForm.get(field);

    return (!validatedField.valid && validatedField.touched)
    ? 'is-invalid': validatedField.touched ? 'is-valid': '';
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      rut: ['', [Validators.required, Validators.pattern(this.rutPattern)]],
      clave: ['',[Validators.required]]
    })
  }

  isCheckedApoderado(event: any): void {
    this.isCheckApoderado = event.target.checked;
    this.isCheckProfesor = false;
    this.isCheckOtro = false;
  }

  isCheckedProfesor(event: any): void {
    this.isCheckApoderado =  false;
    this.isCheckProfesor = event.target.checked;
    this.isCheckOtro = false;
  }

  isCheckedOtro(event: any): void {
    this.isCheckApoderado = false;
    this.isCheckProfesor = false;
    this.isCheckOtro = event.target.checked;
  }

  
}



