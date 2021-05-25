import { createReducer, on } from '@ngrx/store';

import {
  EmployeeCreatePageActions, EmployeeApiActions
}                                            from '@/modules/app/modules/employees/actions'
import { EmployeeStateInterface } from "@/modules/app/modules/employees/interfaces/employee-state.interface";


export const employeeFeatureKey = 'employees';

export interface State
{
  // user: User | null;
  employees: EmployeeStateInterface[]
}

export const initialState: State = {
  employees: []
};

export const reducer = createReducer(
  initialState,
  on(EmployeeApiActions.initSuccess, (state, { employees }) => {
    return { ...state, employees }
  }),
  on(EmployeeApiActions.createSuccess, (state, { employee }) => {
    return { ...state, employees: [ employee ] }
  }),
);

export const getEmployees = (state: State) => state.employees;
