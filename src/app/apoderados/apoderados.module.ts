import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApoderadosRoutingModule } from './apoderados-routing.module';
import { AlumnoComponent } from './alumno/alumno.component';
import { HorarioComponent } from './horario/horario.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [AlumnoComponent, HorarioComponent, AsistenciaComponent, EleccionComponent],
  imports: [
    CommonModule,
    ApoderadosRoutingModule,  
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ApoderadosModule { }
