import { createAction, props } from '@ngrx/store';

import { Book } from '@/modules/app/modules/books/models';

export const searchSuccess = createAction(
  '[Books/API] Search Success',
  props<{ books: Book[] }>()
);

export const searchFailure = createAction(
  '[Books/API] Search Failure',
  props<{ errorMsg: string }>()
);
