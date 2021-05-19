import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                  from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';

import {
    StorageApiActions,
    StorageActions,
    StorageCreatePageActions
}                       from '@/modules/app/modules/storages/actions'
import { Storage } from "@/modules/app/modules/storages/interfaces/storage-state.interface";
import { StorageService }  from "@/modules/app/modules/storages/services/storage.service";
import { LocalStorageService } from "@/modules/core/local-storage/local-storage.service";


const ORGANISATIONS_KEY = 'ORGANISATIONS';

@Injectable()
export class StorageEffects
{
  constructor(
    private router: Router,
    private actions$: Actions,
    private organisationService$: StorageService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(StorageApiActions.init),
        exhaustMap(() => {
          return this.organisationService$.init().pipe(
            map(
              response => StorageApiActions.initSuccess({ storages: response })
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
