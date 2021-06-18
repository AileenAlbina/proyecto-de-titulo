import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApoderadoService } from 'src/app/core/services/apoderado/apoderado.service';
import { ProfFuncService } from 'src/app/core/services/prof-func/prof-func.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    const password: string = this.loginForm.get("clave").value;
    
    if(this.isCheckApoderado)
    {
      this.apoderadoService.saveApoderadoByLogin(rut,password).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/apoderados/apoderado-home');
        }}),  
        error => {
          this.showLoginErrorToast();
        }
    }
    else
    {
      this.profFuncService.saveProfFuncByLogin(rut,password).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/prof-func/prof-func-home');
        }}),  
        error => {
          this.showLoginErrorToast();
        }
    }
    
  }


  private showLoginErrorToast(): void {
    Swal.fire({
      icon: 'error',
      titleText: 'Ha ocurrido un error',
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



