import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                  from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';

import {
  OrganisationApiActions,
  OrganisationActions,
  OrganisationCreatePageActions
}                              from '@/modules/app/modules/organisations/actions'
import { Organisation }        from "@/modules/app/modules/organisations/interfaces/organisation-state.interface";
import { OrganisationService } from "@/modules/app/modules/organisations/services/organisation.service";
import { LocalStorageService } from "@/modules/core/local-storage/local-storage.service";


const ORGANISATIONS_KEY = 'ORGANISATIONS';

@Injectable()
export class OrganisationEffects
{
  constructor(
    private router: Router,
    private actions$: Actions,
    private organisationService$: OrganisationService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(OrganisationApiActions.init),
        exhaustMap(() => {
          return this.organisationService$.init().pipe(
            map(
              response => OrganisationApiActions.initSuccess({ organisations: response })
            )
          )
        })
      )
    }
  );

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrganisationCreatePageActions.create),
      map(action => action.organisation),
      exhaustMap((organisation: Organisation) => {
        return this.organisationService$.create(organisation).pipe(
          map(response => {
            this.router.navigate(['/organisations']).then();
            return OrganisationApiActions.createSuccess({ organisation: response.data });
          }),
          catchError(err => {
            return of(OrganisationApiActions.createFailure(err));
          })
        )
      })
    )
  });

  // createSuccess$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(OrganisationApiActions.createSuccess),
  //     tap(() => {
  //       return this.router.navigate([ '/organisations' ])
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
