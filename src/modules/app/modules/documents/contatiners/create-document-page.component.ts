import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { Document }       from "@/modules/app/modules/documents/interfaces/document-state.interface";
import * as fromDocumentsReducer from '@/modules/app/modules/documents/reducers';
import { DocumentCreatePageActions } from '@/modules/app/modules/documents/actions'


@Component({
  selector: 'app-create-organisation-page',
  template: `
    <mat-toolbar>
      <h3>Create Document</h3>
    </mat-toolbar>
    <mat-grid-list cols="8" rowHeight="400">
      <mat-grid-tile colspan="1"></mat-grid-tile>
      <mat-grid-tile colspan="6">
        <app-organisation-form
          (submitted)="onSubmit($event)"
          [pending]="$pending | async"
          [errorMessage]="$error | async"
        ></app-organisation-form>
      </mat-grid-tile>
      <mat-grid-tile colspan="1"></mat-grid-tile>
    </mat-grid-list>
    <!--    <h1 >Organisations</h1>-->
  `,
  styles: [
    `

    `
  ],
})
export class CreateDocumentPageComponent implements OnInit
{
  $pending = this.store.select(fromDocumentsReducer.selectCreatePagePending);
  $error = this.store.select(fromDocumentsReducer.selectCreatePageError)

  constructor(private store: Store<fromDocumentsReducer.State>) {}

  ngOnInit() {}

  onSubmit(document: Document) {
    this.store.dispatch(DocumentCreatePageActions.create({ document }))
  }
}
