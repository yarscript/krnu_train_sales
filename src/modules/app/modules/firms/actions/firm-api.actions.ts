import { createAction, props } from '@ngrx/store';
import { Firm }        from "@/modules/app/modules/firms/interfaces/firm-state.interface";


export const init = createAction('[Firm/Api] Init');

export const initSuccess = createAction(
  '[Firm/Api] InitSuccess', props<{ firms: Firm[] }>()
);

export const initFailure = createAction(
  '[Firm/Api] InitFailure', props<{ err: any }>()
);

export const createSuccess = createAction(
  '[Firm/Api] Create Success', props<{ firm: Firm }>()
);

export const createFailure = createAction(
  '[Firm/Api] Create Failure', props<{ err: any }>()
);

