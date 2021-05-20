import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  rut: AbstractControl;
  
  constructor(private loginBuilder: FormBuilder) {  
   }

  ngOnInit(): void {
    
    this.loginForm = this.loginBuilder.group({
      rut:['',Validators.required, Validators.pattern("[0-9_-]{8,15}")],
      clave:['',Validators.required]
    });

    this.rut = this.loginForm.controls['rut'];
  }

  ingresar(values)
  {
      if(values.rut == "19263234-k" && values.clave == "aileen")
      {
        location.href = "/apoderados/alummno";
      }
      if(values.rut =="14248459-5" && values.clave == "aileen")
      {
        location.href = "/apoderados/eleccion";
      }
      else
      {
        Swal.fire({
          title:'Usuario o contraseña incorrectos ',
          icon:'error',
          showCloseButton:true,
          showConfirmButton:false
        });
      }
  }
  
}
