import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { StoreModule }         from "@ngrx/store";
import { EffectsModule }       from "@ngrx/effects";
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule }        from '@angular/cdk/layout';

import { UserRoutingModule } from './user-routing.module';

import * as fromUser         from "@/modules/app/modules/user/reducers";
import {
  ProfilePageComponent, ServicePlanPageComponent
}                            from "@/modules/app/modules/user/contatiners";
import { UserEffects }       from "@/modules/app/modules/user/effects";
import { MaterialModule }    from "@/modules/shared/modules/material";
import { ServicePlanModule } from "@/modules/app/modules/service-plan";


export const CONTAINERS = [
  ProfilePageComponent,
  ServicePlanPageComponent,
];

export const COMPONENTS = [];


@NgModule({
  declarations: [
    CONTAINERS, COMPONENTS,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    UserRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromUser.userFeatureKey,
      reducer: fromUser.reducers,
    }),
    EffectsModule.forFeature([ UserEffects ]),
    ServicePlanModule
  ],
})
export class UserModule
{
}
