import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot          from '@/modules/app/reducers';
import * as fromCreatePage    from '@/modules/app/modules/employees/reducers/create-page.reducer';
import * as fromEmployees from '@/modules/app/modules/employees/reducers/employees.reducer';


export const employeeFeatureKey = 'employees';


export interface EmployeesState
{
  [fromEmployees.employeeFeatureKey]: fromEmployees.State;
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State;
}

export interface State extends fromRoot.State
{
  [employeeFeatureKey]: EmployeesState;
}

export function reducers(state: EmployeesState | undefined, action: Action) {
  return combineReducers({
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromEmployees.employeeFeatureKey]: fromEmployees.reducer,
  })(state, action);
}

export const selectEmployeesState = createFeatureSelector<State, EmployeesState>(
  employeeFeatureKey
);

export const selectOEmployeeEntitiesState = createSelector(
  selectEmployeesState, (state) => state.employees
);
export const selectEmployees = createSelector(
  selectOEmployeeEntitiesState, fromEmployees.getEmployees
);


export const selectCreatePageState = createSelector(
  selectEmployeesState, (state) => state.createPage
);
export const selectCreatePageError = createSelector(
  selectCreatePageState, fromCreatePage.getError
);
export const selectCreatePagePending = createSelector(
  selectCreatePageState, fromCreatePage.getPending
);
