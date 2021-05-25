import { createReducer, on } from '@ngrx/store';

import {
  EmployeeApiActions, EmployeeCreatePageActions
} from '@/modules/app/modules/employees/actions'


export const createPageFeatureKey = 'createPage';

export interface State
{
  error: string | null,
  pending: boolean,
}

export const initialState: State = {
  error: null,
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(EmployeeCreatePageActions.create, (state) => ({
    ...state, error: null, pending: true
  })),
  on(EmployeeApiActions.createSuccess, (state) => ({
    ...state, error: null, pending: false
  })),
  on(EmployeeApiActions.createFailure, (state, { err }) => ({
    ...state, error: err, pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
