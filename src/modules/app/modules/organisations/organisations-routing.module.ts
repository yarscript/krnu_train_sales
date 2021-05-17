import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {
  OrganisationsPageComponent
}                                          from "@/modules/app/modules/organisations/contatiners/organisations-page.component";
import { CreateOrganisationPageComponent } from "@/modules/app/modules/organisations/contatiners/create-organisation-page-component";

const routes: Routes = [
  { path: '', component: OrganisationsPageComponent, data: { title: 'organisations' } },
  { path: 'create', component: CreateOrganisationPageComponent, data: { title: 'Create Organisation' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class OrganisationsRoutingModule
{
}
