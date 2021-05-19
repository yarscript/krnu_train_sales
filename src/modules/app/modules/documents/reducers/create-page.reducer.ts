import { createReducer, on } from '@ngrx/store';

import {
  DocumentApiActions, DocumentCreatePageActions
} from '@/modules/app/modules/documents/actions'


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
  on(DocumentCreatePageActions.create, (state) => ({
    ...state, error: null, pending: true
  })),
  on(DocumentApiActions.createSuccess, (state) => ({
    ...state, error: null, pending: false
  })),
  on(DocumentApiActions.createFailure, (state, { err }) => ({
    ...state, error: err, pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
