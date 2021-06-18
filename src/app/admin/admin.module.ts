import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPerfilPfComponent } from './admin-perfil-pf/admin-perfil-pf.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CrearPfComponent } from './admin-perfil-pf/crear-pf/crear-pf.component';
import { AdminPerfilApComponent } from './admin-perfil-ap/admin-perfil-ap.component';
import { CrearApComponent } from './admin-perfil-ap/crear-ap/crear-ap.component';

import { CrearAlComponent } from './admin-perfil-ap/alumnos/crear-al/crear-al.component';
import {FormsModule} from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { AdminApComponent } from './admin-perfil-ap/admin-ap/admin-ap.component';
import { AdminCursosComponent } from './admin-cursos/admin-cursos.component';
import { CrearCursoComponent } from './admin-cursos/crear-curso/crear-curso.component';
import { EditCursoComponent } from './admin-cursos/edit-curso/edit-curso/edit-curso.component';
import { ModificarComponent } from './admin-perfil-pf/modificar/modificar.component';

@NgModule({
  declarations: [AdminPerfilPfComponent, AdminHomeComponent, CrearPfComponent, AdminPerfilApComponent, CrearApComponent, CrearAlComponent, AdminApComponent, AdminCursosComponent, CrearCursoComponent, EditCursoComponent, ModificarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ]
})
export class AdminModule { }
