import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { ProfilePageComponent }     from "@/modules/app/modules/user/contatiners/profile-page.component";
import { ServicePlanPageComponent } from "@/modules/app/modules/user/contatiners/service-plan-page.component";

const routes: Routes = [
  { path: '', component: ProfilePageComponent, data: { title: 'User\'s Profile' } },
  { path: 'service-plan', component: ServicePlanPageComponent, data: { title: 'User Service Plan' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class UserRoutingModule
{
}
