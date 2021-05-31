import { createAction, props } from '@ngrx/store';
import { Deal }        from "@/modules/app/modules/deals/interfaces/deal-state.interface";


export const init = createAction('[Deal/Api] Init');

export const initSuccess = createAction(
  '[Deal/Api] InitSuccess', props<{ deals: Deal[] }>()
);

export const initFailure = createAction(
  '[Deal/Api] InitFailure', props<{ err: any }>()
);

export const createSuccess = createAction(
  '[Deal/Api] Create Success', props<{ deal: Deal }>()
);

export const createFailure = createAction(
  '[Deal/Api] Create Failure', props<{ err: any }>()
);

