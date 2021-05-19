import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect }      from '@ngrx/effects';
import { of, EMPTY }                                  from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';

import {
    DocumentApiActions,
    DocumentCreatePageActions,
    DocumentActions
}                       from '@/modules/app/modules/documents/actions'
import { Document } from "@/modules/app/modules/documents/interfaces/document-state.interface";
import { DocumentService }  from "@/modules/app/modules/documents/services/document.service";
import { LocalStorageService } from "@/modules/core/local-storage/local-storage.service";


const ORGANISATIONS_KEY = 'ORGANISATIONS';

@Injectable()
export class DocumentEffects
{
  constructor(
    private router: Router,
    private actions$: Actions,
    private organisationService$: DocumentService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(DocumentApiActions.init),
        exhaustMap(() => {
          return this.organisationService$.init().pipe(
            map(
              response => DocumentApiActions.initSuccess({ documents: response })
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
