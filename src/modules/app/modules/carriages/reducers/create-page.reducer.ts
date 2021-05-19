import { createReducer, on } from '@ngrx/store';

import {
  FirmApiActions, FirmCreatePageActions
} from '@/modules/app/modules/firms/actions'


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
  on(FirmCreatePageActions.create, (state) => ({
    ...state, error: null, pending: true
  })),
  on(FirmApiActions.createSuccess, (state) => ({
    ...state, error: null, pending: false
  })),
  on(FirmApiActions.createFailure, (state, { err }) => ({
    ...state, error: err, pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
