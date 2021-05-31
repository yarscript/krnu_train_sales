import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {
  DealsPageComponent
}                                  from "@/modules/app/modules/deals/contatiners/deals-page.component";
import { CreateDealPageComponent } from "@/modules/app/modules/deals/contatiners/create-deal-page.component";

const routes: Routes = [
  { path: '', component: DealsPageComponent, data: { title: 'deals' } },
  { path: 'create', component: CreateDealPageComponent, data: { title: 'Create Deals' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DealsRoutingModule
{
}
