import { createReducer, on } from '@ngrx/store';
import { AuthApiActions, LoginPageActions } from '@/modules/auth/actions';

export const loginPageFeatureKey = 'loginPage';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(LoginPageActions.login, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),

  on(AuthApiActions.loginSuccess, (state) => ({
    ...state,
    pending: false,
    error: null,
  })),
  on(AuthApiActions.loginFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
