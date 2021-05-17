import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule }         from "@ngrx/store";
import { EffectsModule }       from "@ngrx/effects";

import { MaterialModule }             from "@/modules/shared/modules/material";
import { OrganisationEffects }        from "@/modules/app/modules/organisations/effects/organisation.effects";
import { OrganisationsRoutingModule } from './organisations-routing.module';

import * as fromPages         from './contatiners';
import * as fromComponents    from './components';
import * as fromOrganisations from './reducers';

export const COMPONENTS = [
  fromPages.OrganisationsPageComponent,
  fromPages.CreateOrganisationPageComponent,

  fromComponents.OrganisationFormComponent,
  fromComponents.OrganisationListComponent,
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    OrganisationsRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromOrganisations.organisationFeatureKey,
      reducer: fromOrganisations.reducers,
    }),
    EffectsModule.forFeature([ OrganisationEffects ])
  ]
})
export class OrganisationsModule
{
}
