import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot          from '@/modules/app/reducers';
import * as fromCreatePage    from '@/modules/app/modules/storages/reducers/create-page.reducer';
import * as fromStorageReducers from '@/modules/app/modules/storages/reducers/storages.reducer';


export const organisationFeatureKey = 'storages';


export interface StorageState
{
  [fromStorageReducers.StorageFeatureKey]: fromStorageReducers.State;
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State;
}

export interface State extends fromRoot.State
{
  [organisationFeatureKey]: StorageState;
}

export function reducers(state: StorageState | undefined, action: Action) {
  return combineReducers({
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromStorageReducers.StorageFeatureKey]: fromStorageReducers.reducer,
  })(state, action);
}

export const selectStoragesState = createFeatureSelector<State, StorageState>(
  organisationFeatureKey
);

export const selectStorageEntitiesState = createSelector(
  selectStoragesState, (state) => state.storage
);
export const selectStorages = createSelector(
  selectStorageEntitiesState, fromStorageReducers.getStorages
);


export const selectCreatePageState = createSelector(
  selectStoragesState, (state) => state.createPage
);
export const selectCreatePageError = createSelector(
  selectCreatePageState, fromCreatePage.getError
);
export const selectCreatePagePending = createSelector(
  selectCreatePageState, fromCreatePage.getPending
);
