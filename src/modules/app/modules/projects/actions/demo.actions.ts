import { createAction, props } from '@ngrx/store';
import { Organisation }        from "@/modules/app/modules/firms/interfaces/firm-state.interface";


export const init = createAction('[Organisation/Api] Init');

export const createSuccess = createAction(
  '[Organisation/Api] Create Success', props<{ organisation: Organisation }>()
);

export const createFailure = createAction(
  '[Organisation/Api] Create Failure', props<{ err: any }>()
);

// export const d = createAction(
//   '[]'
// );
