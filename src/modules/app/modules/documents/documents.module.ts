import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule }         from "@ngrx/store";
import { EffectsModule }       from "@ngrx/effects";

import { MaterialModule }     from "@/modules/shared/modules/material";
import { DocumentEffects }            from "@/modules/app/modules/documents/effects/document.effects";
import { DocumentsRoutingModule } from './documents-routing.module';

import * as fromPages         from './contatiners';
import * as fromComponents    from './components';
import * as fromDocumentReducers from './reducers';

export const COMPONENTS = [
  fromPages.DocumentsPageComponent,
  fromPages.CreateDocumentPageComponent,

  fromComponents.DocumentFormComponent,
  fromComponents.DocumentListComponent,
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DocumentsRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromDocumentReducers.organisationFeatureKey,
      reducer: fromDocumentReducers.reducers,
    }),
    EffectsModule.forFeature([ DocumentEffects ])
  ]
})
export class DocumentsModule
{
}
