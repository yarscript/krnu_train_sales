import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BooksRoutingModule }             from '@/modules/app/modules/books/books-routing.module';
import {
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
}                                         from '@/modules/app/modules/books/components';
import {
  CollectionPageComponent,
  FindBookPageComponent,
  SelectedBookPageComponent,
  ViewBookPageComponent,
}                                         from '@/modules/app/modules/books/containers';
import { BookEffects, CollectionEffects } from '@/modules/app/modules/books/effects';

import * as fromBooks     from '@/modules/app/modules/books/reducers';
import { MaterialModule } from '@/modules/shared/modules/material';
import { PipesModule }    from '@/modules/shared/pipes';

export const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
];

export const CONTAINERS = [
  FindBookPageComponent,
  ViewBookPageComponent,
  SelectedBookPageComponent,
  CollectionPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BooksRoutingModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([BookEffects, CollectionEffects]),
    PipesModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class BooksModule {}
