import { createAction, props } from '@ngrx/store';
import { EmployeeStateInterface }        from "@/modules/app/modules/employees/interfaces/employee-state.interface";

export const create = createAction(
  '[Employee/Page/Create] Create Employee', props<{ employee: EmployeeStateInterface }>()
);
