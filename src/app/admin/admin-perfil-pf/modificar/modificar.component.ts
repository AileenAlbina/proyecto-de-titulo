import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfFuncService } from 'src/app/core/services/prof-func/prof-func.service';
import { Profe } from 'src/app/models/profe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  public personalRegisterForm: FormGroup = new FormGroup({
    nombres:new FormControl(),
    apellidoPaterno: new FormControl(),
    apellidoMaterno: new FormControl(),
    rut:new FormControl(),
    email:new FormControl(),
    direccion:new FormControl(),
    horasContratadas:new FormControl(),
    telefono:new FormControl()
    
  });
  private emailPattern = /\S+@\S+\.\S+/;
  private rutPattern = "^[0-9]+-[0-9kK]{1}$";
  

  constructor(
              private fb: FormBuilder, 
              private router: Router, 
              private profeService: ProfFuncService,
              
  ) {
  }

  ngOnInit(): void {
    
    let id = localStorage.getItem("id");
    this.profeService.getByid(id).subscribe((data: Profe) => {
      this.initForm(data)});
    
  }


  public onSave(): void {
    
    this.profeService.updateProfFunc(this.personalRegisterForm.value).subscribe((data: Profe) => {
      this.showSuccessToast();  
    })
    this.router.navigate(['admin/admin-profile-prof-func']);
  }

  public showSuccessToast(): void {
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'La cuenta ha sido actualizada correctamente',
      timer: 2000,
      showConfirmButton: false
    });
  }

  public isValidField(field: string): string {
    const validatedField = this.personalRegisterForm.get(field);

    return (!validatedField.valid && validatedField.touched)
    ? 'is-invalid': validatedField.touched ? 'is-valid': '';
  }

  public onCancel() {
    Swal.fire({
      title: '¿Desea cancelar la modificación?',
      icon: 'info',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed){
        this.router.navigateByUrl('admin/admin-profile-prof-func');
      }
    })
  }

  
  private initForm(pf: Profe): void {

    this.personalRegisterForm = this.fb.group({
      nombres:pf.nombres,
      apellidoPaterno: pf.apellidoPaterno,
      apellidoMaterno: pf.apellidoMaterno,
      rut:pf.rut,
      email:pf.email,
      direccion:pf.direccion,
      horasContratadas:pf.cantidaHorasContrata,
      telefono:pf.telefono,
      clave:pf.clave
    
    });
  }

}


