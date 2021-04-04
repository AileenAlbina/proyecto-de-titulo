import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  imports: [
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
