import {
  createSelector, createFeatureSelector, Action, combineReducers,
}                         from '@ngrx/store';
import * as fromRoot      from '@/modules/app/reducers';
import * as fromAuth      from '@/modules/auth/reducers/auth.reducer';
import * as fromLoginPage from '@/modules/auth/reducers/login-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState
{
  [fromAuth.statusFeatureKey]: fromAuth.State;
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export interface State extends fromRoot.State
{
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectAuthStatusState = createSelector(
  selectAuthState, (state) => state.status
);
export const selectAuth = createSelector(
  selectAuthStatusState, fromAuth.getAuth
);
export const selectLoggedIn = createSelector(
  selectAuth, (auth) => auth?.token.length > 0
);

export const selectLoginPageState = createSelector(
  selectAuthState, (state) => state.loginPage
);
export const selectLoginPageError = createSelector(
  selectLoginPageState, fromLoginPage.getError
);
export const selectLoginPagePending = createSelector(
  selectLoginPageState, fromLoginPage.getPending
);
