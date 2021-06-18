import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavbarNotAuthComponent } from './navbar-not-auth/navbar-not-auth.component';
import { SidebarApoderadoComponent } from './sidebar-apoderado/sidebar-apoderado.component';
import { SidebarProfesorComponent } from './sidebar-profesor/sidebar-profesor.component';
import { SidebarAdminProfFuncComponent } from './sidebar-admin-prof-func/sidebar-admin-prof-func.component';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, NavbarNotAuthComponent, SidebarApoderadoComponent, SidebarProfesorComponent, SidebarAdminProfFuncComponent],
  imports: [
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarNotAuthComponent,
    SidebarApoderadoComponent,
    SidebarProfesorComponent,
    SidebarAdminProfFuncComponent
  ]
})
export class SharedModule { }
