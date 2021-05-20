import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPerfilPfComponent } from './admin-perfil-pf/admin-perfil-pf.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AdminPerfilPfComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
