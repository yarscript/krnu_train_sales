import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule }         from "@ngrx/store";
import { EffectsModule }       from "@ngrx/effects";

import { MaterialModule }     from "@/modules/shared/modules/material";
import { FirmEffects }        from "@/modules/app/modules/firms/effects/firm.effects";
import { FirmsRoutingModule } from './firms-routing.module';

import * as fromPages         from './contatiners';
import * as fromComponents    from './components';
import * as fromFirmReducers from './reducers';

export const COMPONENTS = [
  fromPages.FirmsPageComponent,
  fromPages.CreateFirmPageComponent,

  fromComponents.FirmFormComponent,
  fromComponents.FirmListComponent,
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FirmsRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromFirmReducers.organisationFeatureKey,
      reducer: fromFirmReducers.reducers,
    }),
    EffectsModule.forFeature([ FirmEffects ])
  ]
})
export class FirmsModule
{
}
