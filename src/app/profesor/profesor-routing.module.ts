import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFichaAlumnoComponent } from './crear-ficha-alumno/crear-ficha-alumno.component';


const routes: Routes = [
{
  path: '',
  children: 
  [
    { path: 'crear-ficha-alumno',component: CrearFichaAlumnoComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
