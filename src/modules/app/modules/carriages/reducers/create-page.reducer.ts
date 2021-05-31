import { createReducer, on } from '@ngrx/store';

import {
  CarriageApiActions, CarriageCreatePageActions
} from '@/modules/app/modules/carriages/actions'


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
  on(CarriageCreatePageActions.create, (state) => ({
    ...state, error: null, pending: true
  })),
  on(CarriageApiActions.createSuccess, (state) => ({
    ...state, error: null, pending: false
  })),
  on(CarriageApiActions.createFailure, (state, { err }) => ({
    ...state, error: err, pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
