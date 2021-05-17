import { createAction, props } from '@ngrx/store';
import { Organisation }        from "@/modules/app/modules/organisations/interfaces/organisation-state.interface";


export const init = createAction('[Organisation/Api] Init');

export const initSuccess = createAction(
  '[Organisation/Api] InitSuccess', props<{ organisations: Organisation[] }>()
);

export const initFailure = createAction(
  '[Organisation/Api] InitFailure', props<{ err: any }>()
)

export const createSuccess = createAction(
  '[Organisation/Api] Create Success', props<{ organisation: Organisation }>()
);

export const createFailure = createAction(
  '[Organisation/Api] Create Failure', props<{ err: any }>()
);

// export const d = createAction(
//   '[]'
// );
