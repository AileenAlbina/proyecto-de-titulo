import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from '../profesor/asistencia/asistencia.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { SendComponent } from './comunicados/send/send.component';
import { CrearFichaAlumnoComponent } from './crear-ficha-alumno/crear-ficha-alumno.component';
import { MenuProfesorComponent } from './menu-profesor/menu-profesor.component';


const routes: Routes = [
{
  path: '',
  children: 
  [
    { path: 'crear-ficha-alumno',component: CrearFichaAlumnoComponent },
    { path: 'prof-func-home',component:MenuProfesorComponent},
    { path: 'notify', component:ComunicadosComponent},
    { path: 'notify-send',component:SendComponent},
    { path: 'asistencia',component: AsistenciaComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
