import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { HorarioComponent } from './horario/horario.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'alumno', component: AlumnoComponent},
      {path:'asistencia', component: AsistenciaComponent},
      {path:'horario', component: HorarioComponent},
      {path:'eleccion', component: EleccionComponent},
      {path:'**', redirectTo: 'alumno'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApoderadosRoutingModule { }
