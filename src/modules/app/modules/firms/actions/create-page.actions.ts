import { createAction, props } from '@ngrx/store';

import { Firm }        from "@/modules/app/modules/firms/interfaces/firm-state.interface";

export const create = createAction(
  '[Firm/Page/Crete] Create Firm', props<{ firm: Firm }>()
);
