import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfesorRoutingModule } from './profesor-routing.module';
import { CrearFichaAlumnoComponent } from './crear-ficha-alumno/crear-ficha-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MenuProfesorComponent } from './menu-profesor/menu-profesor.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { SendComponent } from './comunicados/send/send.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { AsistenciaComponent } from './asistencia/asistencia.component';

@NgModule({
  declarations: [CrearFichaAlumnoComponent, MenuProfesorComponent, ComunicadosComponent, SendComponent, AsistenciaComponent],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgSelectModule

  ]
})
export class ProfesorModule { }
