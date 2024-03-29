import { createReducer, on } from '@ngrx/store';

import {
  DealApiActions, DealCreatePageActions
} from '@/modules/app/modules/deals/actions'


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
  on(DealCreatePageActions.create, (state) => ({
    ...state, error: null, pending: true
  })),
  on(DealApiActions.createSuccess, (state) => ({
    ...state, error: null, pending: false
  })),
  on(DealApiActions.createFailure, (state, { err }) => ({
    ...state, error: err, pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
