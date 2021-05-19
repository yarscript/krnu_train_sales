import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot          from '@/modules/app/reducers';
import * as fromCreatePage   from '@/modules/app/modules/deals/reducers/create-page.reducer';
import * as fromDealReducers from '@/modules/app/modules/deals/reducers/deals.reducer';


export const DealsFeatureKey = 'deals';


export interface DealState
{
  [fromDealReducers.DealFeatureKey]: fromDealReducers.State;
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State;
}

export interface State extends fromRoot.State
{
  [DealsFeatureKey]: DealState;
}

export function reducers(state: DealState | undefined, action: Action) {
  return combineReducers({
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromDealReducers.DealFeatureKey]: fromDealReducers.reducer,
  })(state, action);
}

export const selectDealsState = createFeatureSelector<State, DealState>(
  DealsFeatureKey
);

export const selectDealEntitiesState = createSelector(
  selectDealsState, (state) => state.deal
);
export const selectDeals = createSelector(
  selectDealEntitiesState, fromDealReducers.getDeals
);


export const selectCreatePageState = createSelector(
  selectDealsState, (state) => state.createPage
);
export const selectCreatePageError = createSelector(
  selectCreatePageState, fromCreatePage.getError
);
export const selectCreatePagePending = createSelector(
  selectCreatePageState, fromCreatePage.getPending
);
