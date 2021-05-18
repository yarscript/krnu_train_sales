import { createReducer, on } from '@ngrx/store';

import {
  OrganisationApiActions, OrganisationCreatePageActions
}                                            from '@/modules/app/modules/employees/actions'
import { Organisation as OrganisationState } from "@/modules/app/modules/employees/interfaces/employee-state.interface";


export const organisationFeatureKey = 'employees';

export interface State
{
  // user: User | null;
  organisations: OrganisationState[]
}

export const initialState: State = {
  organisations: []
};

export const reducer = createReducer(
  initialState,
  on(OrganisationApiActions.initSuccess, (state, { organisations }) => {
    return { ...state, organisations }
  }),
  on(OrganisationApiActions.createSuccess, (state, { organisation }) => {
    return { ...state, organisations: [ organisation ] }
  }),
);

export const getOrganisations = (state: State) => state.organisations;
