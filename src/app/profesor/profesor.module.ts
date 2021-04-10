import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { CrearFichaAlumnoComponent } from './crear-ficha-alumno/crear-ficha-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CrearFichaAlumnoComponent],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfesorModule { }
