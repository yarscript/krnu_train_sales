import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                             from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchAll, tap } from 'rxjs/operators';

import {
  FirmApiActions,
  FirmActions,
  FirmCreatePageActions
}                       from '@/modules/app/modules/firms/actions'
import { Firm } from "@/modules/app/modules/firms/interfaces/firm-state.interface";
import { FirmService }  from "@/modules/app/modules/firms/services/firm.service";
import { LocalStorageService } from "@/modules/core/local-storage/local-storage.service";


const ORGANISATIONS_KEY = 'ORGANISATIONS';

@Injectable()
export class FirmEffects
{
  constructor(
    private router: Router,
    private actions$: Actions,
    private firmService$: FirmService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(FirmApiActions.init),
        exhaustMap(() => {
          return this.firmService$.init().pipe(
            map(response => FirmApiActions.initSuccess({ firms: response }))
          )
        })
      )
    }
  );

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FirmCreatePageActions.create),
      map(action => action.firm),
      exhaustMap((firm: Firm) => {
        return this.firmService$.create(firm).pipe(
          map(response => {
            this.router.navigate(['/firms']).then();
            return FirmApiActions.createSuccess({ firm: response.data });
          }),
          catchError(err => {
            return of(FirmApiActions.createFailure(err));
          })
        )
      })
    )
  });

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
