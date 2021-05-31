import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {
  CarriagesPageComponent
}                                  from "@/modules/app/modules/carriages/contatiners/carriages-page.component";
import { CreateCarriagePageComponent } from "@/modules/app/modules/carriages/contatiners/create-carriage-page.component";

const routes: Routes = [
  { path: '', component: CarriagesPageComponent, data: { title: 'carriages' } },
  { path: 'create', component: CreateCarriagePageComponent, data: { title: 'Create Carriages' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CarriagesRoutingModule
{
}
