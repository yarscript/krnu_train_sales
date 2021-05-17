import { createReducer, on } from '@ngrx/store';

import {
  OrganisationApiActions, OrganisationCreatePageActions
} from '@/modules/app/modules/organisations/actions'


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
  on(OrganisationCreatePageActions.create, (state) => ({
    ...state, error: null, pending: true
  })),
  on(OrganisationApiActions.createSuccess, (state) => ({
    ...state, error: null, pending: false
  })),
  on(OrganisationApiActions.createFailure, (state, { err }) => ({
    ...state, error: err, pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
