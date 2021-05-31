import { Injectable }                                 from '@angular/core';
import { Router }                                     from '@angular/router';
import { Actions, ofType, createEffect, Effect }      from '@ngrx/effects';
import { of, EMPTY }                                             from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchAll, tap } from 'rxjs/operators';

import {
  DocumentApiActions,
  DocumentActions,
  DocumentCreatePageActions
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
    private documentService$: DocumentService,
    private localStorageService$: LocalStorageService,
  ) {}

  init$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(DocumentApiActions.init),
        exhaustMap(() => {
          return this.documentService$.init().pipe(
            map(response => DocumentApiActions.initSuccess({ documents: <Document[]>response.data.collection }))
          )
        })
      )
    }
  );

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DocumentCreatePageActions.create),
      map(action => action.document),
      exhaustMap((document: Document) => {
        return this.documentService$.create(document).pipe(
          map(response => {
            this.router.navigate(['/document']).then();
            return DocumentApiActions.createSuccess({ document: response.data });
          }),
          catchError(err => {
            return of(DocumentApiActions.createFailure(err));
          })
        )
      })
    )
  });

  // createSuccess$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(OrganisationApiActions.createSuccess),
  //     tap(() => {
  //       return this.router.navigate([ '/Documents' ])
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
