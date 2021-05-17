import { createReducer, on } from '@ngrx/store';

import { UserApiActions }  from '@/modules/app/modules/user/actions'
import { UserState, user } from "@/modules/app/modules/user/interfaces/user-state.interface";


export const userFeatureKey = 'user';


export interface State
{
  user: UserState,
  error: any
}

export const initialState: State = {
  user,
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(UserApiActions.initSuccess, (state, { user }) => {
    console.log('USER REDUCING INIT ::', user)
    return { ...state, user };
  }),
  on(UserApiActions.initFailure, (state, { error }) => {
    console.log('USER REDUCING FAIL ::', user)

    return { ...state, error };
  })
);

export const getUser = (state: State) => state.user;

export const getError = (state: State) => state.error;
