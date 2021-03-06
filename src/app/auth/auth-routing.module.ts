import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginComponent } from './login/login.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';



const routes: Routes = [
{
  path: '',
  children: [
    { path: 'login',component: LoginComponent },
    { path: 'recuperar-clave',component: RecuperarClaveComponent },
    { path: 'admin', component:LoginAdminComponent},
    { path: '**', redirectTo: 'login'}
  ]
}
  
]



@NgModule({
  imports: [
  RouterModule.forChild(routes)  
  ]
})
export class AuthRoutingModule { }
