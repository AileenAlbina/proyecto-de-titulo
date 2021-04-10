import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private loginBuilder: FormBuilder) {  
   }

  ngOnInit(): void {
    
    this.loginForm = this.loginBuilder.group({
      rut:['',Validators.required],
      clave:['',Validators.required]
    });
  }

  ingresar(values)
  {
      if(values.rut == "19263234-k" && values.clave == "aileen")
      {
        location.href = "/apoderados/alummno";
      }
  }
  
}
