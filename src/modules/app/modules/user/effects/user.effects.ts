import { Injectable }                                                         from '@angular/core';
import { Router }                                                             from '@angular/router';
import { Actions, ofType, createEffect }                                      from '@ngrx/effects';
import { of, EMPTY, fromEvent, merge, timer }                                 from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap, switchMapTo, tap } from 'rxjs/operators';

import {
  UserActions,
  UserApiActions,
  ServicePlanPageActions,
}                              from '@/modules/app/modules/user/actions'
import { UserState }           from "@/modules/app/modules/user/interfaces/user-state.interface";
import { UserApiService }      from "@/modules/app/modules/user/services/user-api.service";
import { LocalStorageService } from '@/modules/core/local-storage/local-storage.service';
import { ServicePlan }         from "@/modules/app/modules/service-plan/interfaces/service-plan.interface";


export const USER_KEY = 'USER';


@Injectable()
export class UserEffects
{

  clicks$ = fromEvent(document, 'click');
  keys$ = fromEvent(document, 'keydown');
  mouse$ = fromEvent(document, 'mousemove');

  constructor(
    private router: Router,
    private actions$: Actions,
    private userApiService$: UserApiService,
    private localStorageService$: LocalStorageService,
  ) {}

  idle$ = createEffect(() =>
    merge(this.clicks$, this.keys$, this.mouse$).pipe(
      switchMapTo(timer(5 * 60 * 1000)), // 5 minute inactivity timeout
      map(() => UserActions.idleTimeout())
    )
  );

  userInitSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserApiActions.initSuccess),
        map(action => action.user),
        tap((user: UserState) => this.localStorageService$.setItem(USER_KEY, { user }))
      ),
    { dispatch: false }
  )

  applyServicePlan$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ServicePlanPageActions.selectServicePlan),
      map(action => action.selectedServicePlan),
      exhaustMap((servicePlan: ServicePlan) => {
        return this.userApiService$.applyServicePlan(servicePlan.service_plan_uuid).pipe(
          map(() => {
            // this.router.navigate()
            return UserActions.init();
          })
        )
      })
    )
  })


}
