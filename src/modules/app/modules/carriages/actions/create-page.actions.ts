import { createAction, props } from '@ngrx/store';

import { Carriage }        from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";

export const create = createAction(
  '[Carriage/Page/Crete] Create Firm', props<{ carriage: Carriage }>()
);
