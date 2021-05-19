import { createAction, props } from '@ngrx/store';
import { Organisation }        from "@/modules/app/modules/employees/interfaces/employee-state.interface";


export const init = createAction('[Employee/Api] Init');

export const initSuccess = createAction(
  '[Employee/Api] InitSuccess', props<{ organisations: Organisation[] }>()
);

export const initFailure = createAction(
  '[Employee/Api] InitFailure', props<{ err: any }>()
)

export const createSuccess = createAction(
  '[Employee/Api] Create Success', props<{ organisation: Organisation }>()
);

export const createFailure = createAction(
  '[Employee/Api] Create Failure', props<{ err: any }>()
);

// export const d = createAction(
//   '[]'
// );
