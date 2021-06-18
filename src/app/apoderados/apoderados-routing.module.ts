import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { ComportamientoComponent } from './comportamiento/comportamiento.component';
import { ComunicacionesComponent } from './comunicaciones/comunicaciones.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { HorarioComponent } from './horario/horario.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'apoderado-home', component: AlumnoComponent},
      {path:'asistencia', component: AsistenciaComponent},
      {path:'horario', component: HorarioComponent},
      {path:'seleccion', component: EleccionComponent},
      {path:'calificaciones',component:CalificacionesComponent},
      {path:'comportamiento',component:ComportamientoComponent},
      {path:'comunicaciones',component:ComunicacionesComponent},
      {path:'**', redirectTo: 'alumno'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApoderadosRoutingModule { }
