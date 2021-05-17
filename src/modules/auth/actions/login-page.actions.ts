import { createAction, props } from '@ngrx/store';
import { Credentials }         from '@/modules/auth/models';

export const login = createAction(
  '[Login Page] Login', props<{ credentials: Credentials }>()
);
