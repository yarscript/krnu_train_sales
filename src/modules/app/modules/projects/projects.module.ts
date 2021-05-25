import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from "@/modules/shared/modules/material";

import { ProjectsRoutingModule } from './projects-routing.module';
import * as fromPages            from "@/modules/app/modules/projects/contatiners";
import * as fromComponents       from "@/modules/app/modules/projects/components";


export const COMPONENTS = [
  fromPages.ProjectsPageComponent,
  fromPages.CreateProjectPageComponent,

  fromComponents.FirmFormComponent,
  fromComponents.FirmListComponent
];


@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ProjectsModule
{
}
