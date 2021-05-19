import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot          from '@/modules/app/reducers';
import * as fromCreatePage    from '@/modules/app/modules/firms/reducers/create-page.reducer';
import * as fromFirmReducers from '@/modules/app/modules/firms/reducers/firms.reducer';


export const organisationFeatureKey = 'firms';


export interface FirmState
{
  [fromFirmReducers.FirmFeatureKey]: fromFirmReducers.State;
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State;
}

export interface State extends fromRoot.State
{
  [organisationFeatureKey]: FirmState;
}

export function reducers(state: FirmState | undefined, action: Action) {
  return combineReducers({
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromFirmReducers.FirmFeatureKey]: fromFirmReducers.reducer,
  })(state, action);
}

export const selectFirmsState = createFeatureSelector<State, FirmState>(
  organisationFeatureKey
);

export const selectFirmEntitiesState = createSelector(
  selectFirmsState, (state) => state.firm
);
export const selectFirms = createSelector(
  selectFirmEntitiesState, fromFirmReducers.getFirms
);


export const selectCreatePageState = createSelector(
  selectFirmsState, (state) => state.createPage
);
export const selectCreatePageError = createSelector(
  selectCreatePageState, fromCreatePage.getError
);
export const selectCreatePagePending = createSelector(
  selectCreatePageState, fromCreatePage.getPending
);
