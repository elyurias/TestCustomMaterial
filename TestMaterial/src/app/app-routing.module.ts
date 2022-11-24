import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'acceso',
    loadChildren: () => import('./acceso/acceso.module').then(mod => mod.AccesoModule),
  },
  {
    path: 'sicatel',
    loadChildren: () => import('./sicatel/sicatel.module').then(mod => mod.SicatelModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
