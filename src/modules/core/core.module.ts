import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';


import { MaterialModule }                       from '@/modules/shared/modules/material';
import {
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
}                                               from '@/modules/core/components';
import { AppComponent, NotFoundPageComponent, } from '@/modules/core/containers';
import { MatMenuModule }                        from "@angular/material/menu";

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  declarations: COMPONENTS,
    imports: [ CommonModule, RouterModule, MaterialModule, MatMenuModule ],
  exports: COMPONENTS,
})
export class CoreModule
{
}
