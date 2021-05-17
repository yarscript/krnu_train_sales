import { createAction, props } from '@ngrx/store';
import { UserState }           from "@/modules/app/modules/user/interfaces/user-state.interface";


export const initSuccess = createAction(
  '[User/Api] Init Success', props<{ user: UserState }>()
);

export const initFailure = createAction(
  '[User/Api] Init Failure', props<{ error: string }>()
);


