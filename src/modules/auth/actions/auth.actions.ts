import { createAction } from '@ngrx/store';

// export enum AuthActions {
//   Logout = '[Auth] Logout',
//   LogoutConfirmation = '[Auth] Logout Confirmation',
//   LogoutConfirmationDismiss = '[Auth] Logout Confirmation Dismiss'
// }


export const logout = createAction('[Auth] Logout');
export const logoutConfirmation = createAction('[Auth] Logout Confirmation');
export const logoutConfirmationDismiss = createAction(
  '[Auth] Logout Confirmation Dismiss'
);
