import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule }         from "@ngrx/store";
import { EffectsModule }       from "@ngrx/effects";

import { MaterialModule }     from "@/modules/shared/modules/material";
import { FirmEffects }            from "@/modules/app/modules/firms/effects/firm.effects";
import { CarriagesRoutingModule } from './carriages-routing.module';

import * as fromPages         from './contatiners';
import * as fromComponents    from './components';
import * as fromCarriageReducers from './reducers';

export const COMPONENTS = [
  fromPages.CarriagesPageComponent,
  fromPages.CreateCarriagePageComponent,

  fromComponents.CarriageFormComponent,
  fromComponents.CarriageListComponent,
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarriagesRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromCarriageReducers.CarriagesFeatureKey,
      reducer: fromCarriageReducers.reducers,
    }),
    EffectsModule.forFeature([ FirmEffects ])
  ]
})
export class CarriagesModule
{
}
