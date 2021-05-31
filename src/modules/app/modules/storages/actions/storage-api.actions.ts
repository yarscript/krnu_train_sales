import { createAction, props } from '@ngrx/store';
import { Storage }        from "@/modules/app/modules/storages/interfaces/storage-state.interface";


export const init = createAction('[Storage/Api] Init');

export const initSuccess = createAction(
  '[Storage/Api] InitSuccess', props<{ storages: Storage[] }>()
);

export const initFailure = createAction(
  '[Storage/Api] InitFailure', props<{ err: any }>()
);

export const createSuccess = createAction(
  '[Storage/Api] Create Success', props<{ storage: Storage }>()
);

export const createFailure = createAction(
  '[Storage/Api] Create Failure', props<{ err: any }>()
);

