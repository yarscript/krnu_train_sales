import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot          from '@/modules/app/reducers';
import * as fromCreatePage    from '@/modules/app/modules/employees/reducers/create-page.reducer';
import * as fromOrganisations from '@/modules/app/modules/employees/reducers/employees.reducer';


export const organisationFeatureKey = 'employees';


export interface OrganisationsState
{
  [fromOrganisations.organisationFeatureKey]: fromOrganisations.State;
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State;
}

export interface State extends fromRoot.State
{
  [organisationFeatureKey]: OrganisationsState;
}

export function reducers(state: OrganisationsState | undefined, action: Action) {
  return combineReducers({
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromOrganisations.organisationFeatureKey]: fromOrganisations.reducer,
  })(state, action);
}

export const selectOrganisationsState = createFeatureSelector<State, OrganisationsState>(
  organisationFeatureKey
);

export const selectOrganisationEntitiesState = createSelector(
  selectOrganisationsState, (state) => state.employees
);
export const selectOrganisations = createSelector(
  selectOrganisationEntitiesState, fromOrganisations.getOrganisations
);


export const selectCreatePageState = createSelector(
  selectOrganisationsState, (state) => state.createPage
);
export const selectCreatePageError = createSelector(
  selectCreatePageState, fromCreatePage.getError
);
export const selectCreatePagePending = createSelector(
  selectCreatePageState, fromCreatePage.getPending
);
