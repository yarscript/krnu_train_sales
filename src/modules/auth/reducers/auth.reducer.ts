import { createReducer, on }           from '@ngrx/store';
import { AuthApiActions, AuthActions } from '@/modules/auth/actions';
import { User }                        from '@/modules/auth/models';
import { AuthState, auth }             from "@/modules/auth/interfaces/auth-state.interface";


export const statusFeatureKey = 'status';

export interface State
{
  // user: User | null;
  auth: AuthState
}

export const initialState: State = {
  auth
};

export const reducer = createReducer(
  initialState,
  on(AuthApiActions.loginSuccess, (state, { auth }) => ({ ...state, auth })),
  on(AuthActions.logout, () => initialState)
);

export const getAuth = (state: State) => state.auth;
