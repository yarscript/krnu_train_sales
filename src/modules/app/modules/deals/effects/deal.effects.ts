import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                             from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchAll, tap } from 'rxjs/operators';

import {
  DealApiActions,
  DealActions,
  DealCreatePageActions
}                       from '@/modules/app/modules/deals/actions'
import { Deal } from "@/modules/app/modules/deals/interfaces/deal-state.interface";
import { DealService }  from "@/modules/app/modules/deals/services/deal.service";
import { LocalStorageService } from "@/modules/core/local-storage/local-storage.service";


const ORGANISATIONS_KEY = 'ORGANISATIONS';

@Injectable()
export class DealEffects
{
  constructor(
    private router: Router,
    private actions$: Actions,
    private dealService$: DealService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(DealApiActions.init),
        exhaustMap(() => {
          return this.dealService$.init().pipe(
            map(response => DealApiActions.initSuccess({ deals: <Deal[]>response.data.data }))
          )
        })
      )
    }
  );

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DealCreatePageActions.create),
      map(action => action.deal),
      exhaustMap((deal: Deal) => {
        return this.dealService$.create(deal).pipe(
          map(response => {
            this.router.navigate(['/deals']).then();
            return DealApiActions.createSuccess({ deal: response.data });
          }),
          catchError(err => {
            return of(DealApiActions.createFailure(err));
          })
        )
      })
    )
  });

  // createSuccess$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(OrganisationApiActions.createSuccess),
  //     tap(() => {
  //       return this.router.navigate([ '/Deals' ])
  //     })
  //   )
  // });

  // createFailure$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(OrganisationApiActions.createFailure),
  //
  //   )
  // });


}
