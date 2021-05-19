import { createAction, props } from '@ngrx/store';

import { Document }        from "@/modules/app/modules/documents/interfaces/document-state.interface";

export const create = createAction(
  '[Document/Page/Crete] Create Document', props<{ document: Document }>()
);
