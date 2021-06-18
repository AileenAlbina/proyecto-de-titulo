import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthAdminService } from 'src/app/core/services/auth-admin/auth-admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  public loginAdminForm: FormGroup;
  private rutPattern = "^[0-9]+-[0-9kK]{1}$";


  constructor(
              private fb:FormBuilder, 
              private router: Router,
              private route: ActivatedRoute,
              private authAdminService : AuthAdminService 

  ) {
   this.initForm();
  }

  ngOnInit(): void {   
  }

  public onSave(): void {
    const rut: string = this.loginAdminForm.get("rut").value;
    const password: string = this.loginAdminForm.get("clave").value;

    this.authAdminService.saveAdminByLogin(rut,password).subscribe(data => {
      if (data) {
        this.router.navigateByUrl('/admin/admin-home');
      }}),  
      error => {
        this.showLoginErrorToast();
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
    const validatedField = this.loginAdminForm.get(field);

    return (!validatedField.valid && validatedField.touched)
    ? 'is-invalid': validatedField.touched ? 'is-valid': '';
  }

  private initForm(): void {
    this.loginAdminForm = this.fb.group({
      rut: ['', [Validators.required, Validators.pattern(this.rutPattern)]],
      clave: ['',[Validators.required]]
    })
  }

}



