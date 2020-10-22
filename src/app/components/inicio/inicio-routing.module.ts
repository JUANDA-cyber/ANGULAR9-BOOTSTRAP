import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ɵangular_packages_router_router_h } from '@angular/router';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
