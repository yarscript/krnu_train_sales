import { createAction, props } from '@ngrx/store';

import { Book } from '@/modules/app/modules/books/models';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  props<{ book: Book }>()
);
