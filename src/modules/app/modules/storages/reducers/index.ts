import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot          from '@/modules/app/reducers';
import * as fromCreatePage    from '@/modules/app/modules/storages/reducers/create-page.reducer';
import * as fromStorageReducers from '@/modules/app/modules/storages/reducers/storages.reducer';


export const StoragesFeatureKey = 'storages';


export interface StorageState
{
  [fromStorageReducers.StoragesFeatureKey]: fromStorageReducers.State;
  [fromCreatePage.createPageFeatureKey]: fromCreatePage.State;
}

export interface State extends fromRoot.State
{
  [StoragesFeatureKey]: StorageState;
}

export function reducers(state: StorageState | undefined, action: Action) {
  return combineReducers({
    [fromCreatePage.createPageFeatureKey]: fromCreatePage.reducer,
    [fromStorageReducers.StoragesFeatureKey]: fromStorageReducers.reducer,
  })(state, action);
}

export const selectStoragesState = createFeatureSelector<State, StorageState>(
  StoragesFeatureKey
);

export const selectFirmEntitiesState = createSelector(
  selectStoragesState, (state) => state.storages
);
export const selectStorages = createSelector(
  selectFirmEntitiesState, fromStorageReducers.getStorages
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
