import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                             from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchAll, tap } from 'rxjs/operators';

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
    private storageService$: StorageService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(StorageApiActions.init),
        exhaustMap(() => {
          return this.storageService$.init().pipe(
            map(response => StorageApiActions.initSuccess({ storages: <Storage[]>response.data.collection }))
          )
        })
      )
    }
  );

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StorageCreatePageActions.create),
      map(action => action.storage),
      exhaustMap((storage: Storage) => {
        return this.storageService$.create(storage).pipe(
          map(response => {
            this.router.navigate(['/storage']).then();
            return StorageApiActions.createSuccess({ storage: response.data });
          }),
          catchError(err => {
            return of(StorageApiActions.createFailure(err));
          })
        )
      })
    )
  });

  // createSuccess$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(OrganisationApiActions.createSuccess),
  //     tap(() => {
  //       return this.router.navigate([ '/Storages' ])
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
