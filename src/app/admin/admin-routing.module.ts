import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCursosComponent } from './admin-cursos/admin-cursos.component';
import { CrearCursoComponent } from './admin-cursos/crear-curso/crear-curso.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPerfilApComponent } from './admin-perfil-ap/admin-perfil-ap.component';
import { AdminPerfilPfComponent } from './admin-perfil-pf/admin-perfil-pf.component';
import { CrearPfComponent } from './admin-perfil-pf/crear-pf/crear-pf.component';
import { ModificarComponent } from './admin-perfil-pf/modificar/modificar.component';

const routes: Routes = [{
  path: '',
  children: 
  [
    { path:'admin-profile-prof-func',component: AdminPerfilPfComponent },
    { path:'admin-profile-apoderado',component: AdminPerfilApComponent},
    { path:'admin-home',component:AdminHomeComponent},
    { path:'admin-courses', component:AdminCursosComponent},
    { path:'user-edit', component: ModificarComponent },
    { path:'user-create', component:CrearPfComponent},
    { path:'crear-curso',component:CrearCursoComponent}

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

