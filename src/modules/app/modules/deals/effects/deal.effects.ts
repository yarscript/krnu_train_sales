import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                  from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';

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
    private organisationService$: DealService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(DealApiActions.init),
        exhaustMap(() => {
          return this.organisationService$.init().pipe(
            map(
              response => DealApiActions.initSuccess({ firms: response })
            )
          )
        })
      )
    }
  );
  //
  // create$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(OrganisationCreatePageActions.create),
  //     map(action => action.organisation),
  //     exhaustMap((organisation: Organisation) => {
  //       return this.organisationService$.create(organisation).pipe(
  //         map(response => {
  //           this.router.navigate(['/firms']).then();
  //           return OrganisationApiActions.createSuccess({ organisation: response.data });
  //         }),
  //         catchError(err => {
  //           return of(OrganisationApiActions.createFailure(err));
  //         })
  //       )
  //     })
  //   )
  // });

  // createSuccess$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(OrganisationApiActions.createSuccess),
  //     tap(() => {
  //       return this.router.navigate([ '/firms' ])
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
