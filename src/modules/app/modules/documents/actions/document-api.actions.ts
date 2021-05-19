import { createAction, props } from '@ngrx/store';
import { Document }        from "@/modules/app/modules/documents/interfaces/document-state.interface";


export const init = createAction('[Document/Api] Init');

export const initSuccess = createAction(
  '[Document/Api] InitSuccess', props<{ documents: Document[] }>()
);

export const initFailure = createAction(
  '[Document/Api] InitFailure', props<{ err: any }>()
);

export const createSuccess = createAction(
  '[Document/Api] Create Success', props<{ document: Document }>()
);

export const createFailure = createAction(
  '[Document/Api] Create Failure', props<{ err: any }>()
);

