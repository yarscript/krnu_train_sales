import { createReducer, on } from '@ngrx/store';

import {
  StorageApiActions, StorageCreatePageActions
} from '@/modules/app/modules/storages/actions'


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
  on(StorageCreatePageActions.create, (state) => ({
    ...state, error: null, pending: true
  })),
  on(StorageApiActions.createSuccess, (state) => ({
    ...state, error: null, pending: false
  })),
  on(StorageApiActions.createFailure, (state, { err }) => ({
    ...state, error: err, pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
