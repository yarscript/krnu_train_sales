import { createAction, props } from '@ngrx/store';

import { EmployeeStateInterface }        from "@/modules/app/modules/employees/interfaces/employee-state.interface";


export const init = createAction('[Employee/Api] Init');

export const initSuccess = createAction(
  '[Employee/Api] InitSuccess', props<{ employees: EmployeeStateInterface[] }>()
);

export const initFailure = createAction(
  '[Employee/Api] InitFailure', props<{ err: any }>()
)

export const createSuccess = createAction(
  '[Employee/Api] Create Success', props<{ employee: EmployeeStateInterface }>()
);

export const createFailure = createAction(
  '[Employee/Api] Create Failure', props<{ err: any }>()
);

// export const d = createAction(
//   '[]'
// );
