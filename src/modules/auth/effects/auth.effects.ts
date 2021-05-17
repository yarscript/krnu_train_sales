import { Injectable }                                                       from '@angular/core';
import { MatDialog }                                                        from '@angular/material/dialog';
import { Router }                                                           from '@angular/router';
import { Actions, ofType, createEffect, Effect }                            from '@ngrx/effects';
import { of, EMPTY }                                                        from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap, tap, concatMap } from 'rxjs/operators';

import {
  LoginPageActions, AuthActions, AuthApiActions,
}                                      from '@/modules/auth/actions';
import { UserActions, UserApiActions } from '@/modules/app/modules/user/actions';

import * as fromAuth from '@/modules/auth/reducers/auth.reducer';

import { Credentials }                       from '@/modules/auth/models';
import { AuthService }                       from '@/modules/auth/services';
import { LogoutConfirmationDialogComponent } from '@/modules/auth/components';
import { LocalStorageService }               from '@/modules/core/local-storage/local-storage.service';
import { UserService }                       from "@/modules/app/modules/user/services/user.service";
import { UserApiService }                    from "@/modules/app/modules/user/services/user-api.service";


export const AUTH_KEY = 'AUTH';


@Injectable()
export class AuthEffects
{
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private actions$: Actions,
    private authService$: AuthService,
    private userApiService$: UserApiService,
    private localStorageService: LocalStorageService,
  ) {}

  login$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(LoginPageActions.login),
        map(action => action.credentials),
        exhaustMap((credentials: Credentials) => (
          this.authService$.login(credentials).pipe(
            map(response => {

              console.log('Api fetched auth ====>>', response)
              return AuthApiActions.loginSuccess({ auth: response })
            }),
            catchError(error => {
                console.log('Api fetched error =====>>', error)
                return of(AuthApiActions.loginFailure({ error: error.error.message }))
              }
            )
          ))
        )
      )
    }
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginSuccess),
        map(action => action.auth),
        exhaustMap((auth) => {
          console.log('loginSuccess$::auth =====>>', auth);

          this.localStorageService.setItem(AUTH_KEY, { auth: { status: { auth } } })
          this.router.navigate([ '/home' ]).then();
          return this.userApiService$.init(auth).pipe(
            switchMap((user) => of(UserApiActions.initSuccess({ user }))),
            catchError((err) => of(err.getMessage()))
          );
        })
      ),
    // { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginRedirect, AuthActions.logout),
        tap(() => this.router.navigate([ '/login' ]))
      ),
    { dispatch: false }
  );

  logoutConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logoutConfirmation),
      exhaustMap(() => {
        const dialogRef =
          this.dialog.open<LogoutConfirmationDialogComponent, undefined, boolean>(LogoutConfirmationDialogComponent);

        return dialogRef.afterClosed();
      }),
      map((result) => {
          if (result) {
          }
          return result ? AuthActions.logout() : AuthActions.logoutConfirmationDismiss()
        }
      )
    )
  );

  logout = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        this.router.navigate([ 'login' ]).then();
        console.log('fromAuth.initialState', fromAuth.initialState)
        this.localStorageService.setItem(AUTH_KEY, fromAuth.initialState)
      })
    ), { dispatch: false }
  );

  logoutIdleUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.idleTimeout),
      map(() => AuthActions.logout())
    )
  );
}
