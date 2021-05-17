import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule }  from "@ngrx/store";

import * as fromServicePlan       from "@/modules/app/modules/service-plan/reducers";
import { EffectsModule }          from "@ngrx/effects";
import { ServicePlanListEffects } from "@/modules/app/modules/service-plan/effects";
import { MaterialModule }         from "@/modules/shared/modules/material";

import { SelectServicePlanComponent } from '@/modules/app/modules/service-plan/components'


export const COMPONENTS = [
  SelectServicePlanComponent
];


@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,

    StoreModule.forFeature({
      name: fromServicePlan.servicePlanFeatureKey,
      reducer: fromServicePlan.reducers,
    }),
    EffectsModule.forFeature([ ServicePlanListEffects ])
  ],
  exports: [ ...COMPONENTS ]
})
export class ServicePlanModule
{
}
