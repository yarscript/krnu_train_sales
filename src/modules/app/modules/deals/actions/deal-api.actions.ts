import { createAction, props } from '@ngrx/store';
import { Firm }        from "@/modules/app/modules/firms/interfaces/firm-state.interface";


export const init = createAction('[Deal/Api] Init');

export const initSuccess = createAction(
  '[Deal/Api] InitSuccess', props<{ firms: Firm[] }>()
);

export const initFailure = createAction(
  '[Deal/Api] InitFailure', props<{ err: any }>()
);

export const createSuccess = createAction(
  '[Deal/Api] Create Success', props<{ firm: Firm }>()
);

export const createFailure = createAction(
  '[Deal/Api] Create Failure', props<{ err: any }>()
);

