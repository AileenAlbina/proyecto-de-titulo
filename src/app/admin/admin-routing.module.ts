import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPerfilPfComponent } from './admin-perfil-pf/admin-perfil-pf.component';

const routes: Routes = [{
  path: '',
  children: 
  [
    { path: 'administrar-perfiles',component: AdminPerfilPfComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

