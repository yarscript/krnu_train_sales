import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {
  EmployeesPageComponent
}                                      from "@/modules/app/modules/employees/contatiners/employees-page.component";
import { CreateEmployeePageComponent } from "@/modules/app/modules/employees/contatiners/create-employee-page.component";

const routes: Routes = [
  { path: '', component: EmployeesPageComponent, data: { title: 'employee' } },
  { path: 'create', component: CreateEmployeePageComponent, data: { title: 'Create Employee' } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class EmployeesRoutingModule
{
}
