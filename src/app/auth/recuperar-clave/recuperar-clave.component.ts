import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {

  formRecuperarClave: FormGroup;

  constructor(private recuperarClaveBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formRecuperarClave = this.recuperarClaveBuilder.group({
      rut:['',Validators.required],
    });

  }

  recuperarClave(value)
  {
    console.log("FUNCIONA");
  }

}
