import { props, createAction, Action } from '@ngrx/store';
// import { User }                from '@/modules/auth/models';
import { AuthState }                   from "@/modules/auth/interfaces/auth-state.interface";
import { Credentials }                 from '@/modules/auth/models';


export const login = createAction(
  '[Auth/API] Login', props<{ credentials: Credentials }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Login Success', props<{ auth: AuthState }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure', props<{ error: any }>()
);

export const loginRedirect = createAction('[Auth/API] Login Redirect');
