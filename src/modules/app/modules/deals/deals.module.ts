import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule }         from "@ngrx/store";
import { EffectsModule }       from "@ngrx/effects";

import { MaterialModule }     from "@/modules/shared/modules/material";
import { DealEffects }        from "@/modules/app/modules/deals/effects/deal.effects";
import { DealsRoutingModule } from './deals-routing.module';

import * as fromPages         from './contatiners';
import * as fromComponents    from './components';
import * as fromFirmReducers from './reducers';

export const COMPONENTS = [
  fromPages.DealsPageComponent,
  fromPages.CreateDealPageComponent,

  fromComponents.DealFormComponent,
  fromComponents.DealListComponent,
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DealsRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromFirmReducers.DealsFeatureKey,
      reducer: fromFirmReducers.reducers,
    }),
    EffectsModule.forFeature([ DealEffects ])
  ]
})
export class DealsModule
{
}
