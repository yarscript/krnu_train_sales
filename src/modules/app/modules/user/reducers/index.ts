import {
  createSelector, createFeatureSelector, Action, combineReducers,
} from '@ngrx/store';

import * as fromRoot from '@/modules/app/reducers';
import * as fromUser from './user.reducer';


export const userFeatureKey = 'user';


export interface UserState
{
  [fromUser.userFeatureKey]: fromUser.State;
}

export interface State extends fromRoot.State
{
  [userFeatureKey]: UserState;

}

export function reducers(state: UserState | undefined, action: Action) {
  return combineReducers({
    [fromUser.userFeatureKey]: fromUser.reducer,
  })(state, action);
}

export const selectUserState = createFeatureSelector<State, UserState>(
  userFeatureKey
);

export const selectUserEntitiesState = createSelector(
  selectUserState, (state) => state.user
);

export const selectUser = createSelector(
  selectUserEntitiesState, fromUser.getUser
);
