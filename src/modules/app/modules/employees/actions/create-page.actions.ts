import { createAction, props } from '@ngrx/store';
import { Organisation }        from "@/modules/app/modules/employees/interfaces/employee-state.interface";

export const create = createAction(
  '[Create Organisation Page] Create', props<{ organisation: Organisation }>()
);
