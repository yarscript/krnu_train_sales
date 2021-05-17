import { Injectable }                                                         from '@angular/core';
import { Router }                                                             from '@angular/router';
import { Actions, ofType, createEffect }                                      from '@ngrx/effects';
import { of, EMPTY, fromEvent, merge, timer }                                 from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap, switchMapTo, tap } from 'rxjs/operators';

import {
  ServicePlanListApiActions,
  ServicePlanListPageActions,
}                              from '@/modules/app/modules/service-plan/actions'
import { LocalStorageService } from '@/modules/core/local-storage/local-storage.service';
import { ServicePlanService }  from "@/modules/app/modules/service-plan/services/service-plan.service";
import { ServicePlan }         from "@/modules/app/modules/service-plan/interfaces/service-plan.interface";


export const SERVICE_PLAN_LIST_KEY = 'SERVICE_PLAN_LIST';


@Injectable()
export class ServicePlanListEffects
{
  constructor(
    private actions$: Actions,
    private localStorageService$: LocalStorageService,
    private servicePlanService$: ServicePlanService,
  ) {}

  loadList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ServicePlanListPageActions.init),
      switchMap(() => this.servicePlanService$.loadList().pipe(
        map((response) => ServicePlanListApiActions.loadServicePlanListSuccess(
          { servicePlanList: <ServicePlan[]>response.data }
        )),
        catchError((err) => of(
          ServicePlanListApiActions.loadServicePlanListFailure({ errorMsg: err.message })
          )
        )
      ))
    )
  });

  // loadListSuccess$ = createEffect(() => this.actions$.pipe(
  //   ofType(ServicePlanListApiActions.loadServicePlanListSuccess),
  //
  //   )
  // )
}
