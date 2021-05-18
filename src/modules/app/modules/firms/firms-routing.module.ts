import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {
  FirmsPageComponent
}                                  from "@/modules/app/modules/firms/contatiners/firms-page.component";
import { CreateFirmPageComponent } from "@/modules/app/modules/firms/contatiners/create-firm-page.component";

const routes: Routes = [
  { path: '', component: FirmsPageComponent, data: { title: 'firms' } },
  { path: 'create', component: CreateFirmPageComponent, data: { title: 'Create Firms' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class FirmsRoutingModule
{
}
