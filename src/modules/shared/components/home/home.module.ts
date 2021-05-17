import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }      from '@angular/router';

import { MaterialModule }    from '@/modules/shared/modules/material';


import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

export const COMPONENTS = [
  HomeComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [ CommonModule, RouterModule, HomeRoutingModule, MaterialModule ]
})
export class HomeModule
{
}
