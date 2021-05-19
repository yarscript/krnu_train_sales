import { createAction, props } from '@ngrx/store';
import { Carriage }        from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";


export const init = createAction('[Carriage/Api] Init');

export const initSuccess = createAction(
  '[Carriage/Api] InitSuccess', props<{ carriages: Carriage[] }>()
);

export const initFailure = createAction(
  '[Carriage/Api] InitFailure', props<{ err: any }>()
);

export const createSuccess = createAction(
  '[Carriage/Api] Create Success', props<{ carriage: Carriage }>()
);

export const createFailure = createAction(
  '[Carriage/Api] Create Failure', props<{ err: any }>()
);

