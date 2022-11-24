import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ExternoComponent } from './externo/externo.component';
import { AccesoRoutingModule } from './acceso-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    ExternoComponent
  ],
  imports: [
    CommonModule,
    AccesoRoutingModule
  ]
})
export class AccesoModule { }
