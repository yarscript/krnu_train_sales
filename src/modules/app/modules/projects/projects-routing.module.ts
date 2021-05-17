import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { ProjectsPageComponent }      from "@/modules/app/modules/projects/contatiners/projects-page.component";
import { CreateProjectPageComponent } from "@/modules/app/modules/projects/contatiners";


const routes: Routes = [
  { path: '', component: ProjectsPageComponent, data: { title: 'Projects' } },
  { path: 'create', component: CreateProjectPageComponent, data: { title: 'Create Projects' } }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class ProjectsRoutingModule
{
}
