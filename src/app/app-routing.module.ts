import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';



const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'apoderados',
  loadChildren: () => import('./apoderados/apoderados.module').then(m => m.ApoderadosModule)
},
{
  path:'prof-func',
  loadChildren: () => import('./profesor/profesor.module').then(m=> m.ProfesorModule)
},
{
  path:'admin',
  loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule)
},
{
  path: '**',
  redirectTo: 'auth'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
    enableTracing: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})

export class AppRoutingModule { }