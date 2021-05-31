import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule }         from "@ngrx/store";
import { EffectsModule }       from "@ngrx/effects";

import { MaterialModule }     from "@/modules/shared/modules/material";
import { StorageEffects }       from "@/modules/app/modules/storages/effects/storage.effects";
import { StoragesRoutingModule } from './storages-routing.module';

import * as fromPages         from './contatiners';
import * as fromComponents    from './components';
import * as fromStorageReducers from './reducers';

export const COMPONENTS = [
  fromPages.StoragesPageComponent,
  fromPages.CreateStoragePageComponent,

  fromComponents.StorageFormComponent,
  fromComponents.StorageListComponent,
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoragesRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromStorageReducers.organisationFeatureKey,
      reducer: fromStorageReducers.reducers,
    }),
    EffectsModule.forFeature([ StorageEffects ])
  ]
})
export class StoragesModule
{
}
