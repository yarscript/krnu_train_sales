import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot          from '@/modules/app/reducers';
import * as fromCreatePage    from '@/modules/app/modules/carriages/reducers/create-page.reducer';
import * as fromCarriageReducers from '@/modules/app/modules/carriages/reducers/carriages.reducer';


export const organisationFeatureKey = 'carriages';


export interface CarriageState
{
  [fromCarriageReducers.CarriageFeatureKey]: fromCarriageReducers.State;
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State;
}

export interface State extends fromRoot.State
{
  [organisationFeatureKey]: CarriageState;
}

export function reducers(state: CarriageState | undefined, action: Action) {
  return combineReducers({
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromCarriageReducers.CarriageFeatureKey]: fromCarriageReducers.reducer,
  })(state, action);
}

export const selectCarriagesState = createFeatureSelector<State, CarriageState>(
  organisationFeatureKey
);

export const selectCarriageEntitiesState = createSelector(
  selectCarriagesState, (state) => state.carriage
);
export const selectCarriages = createSelector(
  selectCarriageEntitiesState, fromCarriageReducers.getCarriages
);


export const selectCreatePageState = createSelector(
  selectCarriagesState, (state) => state.createPage
);
export const selectCreatePageError = createSelector(
  selectCreatePageState, fromCreatePage.getError
);
export const selectCreatePagePending = createSelector(
  selectCreatePageState, fromCreatePage.getPending
);
