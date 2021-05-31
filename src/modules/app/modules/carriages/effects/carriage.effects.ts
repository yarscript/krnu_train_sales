import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                             from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchAll, tap } from 'rxjs/operators';

import {
  CarriageApiActions,
  CarriageActions,
  CarriageCreatePageActions
}                       from '@/modules/app/modules/carriages/actions'
import { Carriage } from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";
import { CarriageService }  from "@/modules/app/modules/carriages/services/carriage.service";
import { LocalStorageService } from "@/modules/core/local-storage/local-storage.service";


const ORGANISATIONS_KEY = 'ORGANISATIONS';

@Injectable()
export class CarriageEffects
{
  constructor(
    private router: Router,
    private actions$: Actions,
    private carriageService$: CarriageService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CarriageApiActions.init),
        exhaustMap(() => {
          return this.carriageService$.init().pipe(
            map(response => CarriageApiActions.initSuccess({ carriages: <Carriage[]>response.data.collection }))
          )
        })
      )
    }
  );

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CarriageCreatePageActions.create),
      map(action => action.carriage),
      exhaustMap((carriage: Carriage) => {
        return this.carriageService$.create(carriage).pipe(
          map(response => {
            this.router.navigate(['/carriage']).then();
            return CarriageApiActions.createSuccess({ carriage: response.data.data });
          }),
          catchError(err => {
            return of(CarriageApiActions.createFailure(err));
          })
        )
      })
    )
  });

  // createSuccess$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(OrganisationApiActions.createSuccess),
  //     tap(() => {
  //       return this.router.navigate([ '/Carriages' ])
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
