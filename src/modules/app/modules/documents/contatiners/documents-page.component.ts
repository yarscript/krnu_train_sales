import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromDocumentReducers from '@/modules/app/modules/documents/reducers';
import { DocumentService }        from "@/modules/app/modules/documents/services/document.service";

import { DocumentApiActions } from '@/modules/app/modules/documents/actions'


@Component({
  selector: 'app-documents-page',
  template: `
    <mat-toolbar fxLayout="row">
      <h3>documents</h3>
      <button
        fxFlexAlign="center"
        fxFlexOffset="85"
        mat-raised-button
        color="primary"
        routerLink="create"
      >Create</button>
    </mat-toolbar>
        <mat-tab-group>
          <mat-tab label="Active">
            <app-document-list
              [documents]="documents$ | async"
            ></app-document-list>
          </mat-tab>
          <mat-tab label="Archived">Content 2</mat-tab>
          <mat-tab label="Content3">Content 3</mat-tab>
        </mat-tab-group>
<!--    <h1 >Organisations</h1>-->
  `,
  styles: [
    `

    `
  ],
})
export class DocumentsPageComponent implements OnInit
{
  documents$ = this.store.select(fromDocumentReducers.selectDocuments)

  constructor(
    private store: Store<fromDocumentReducers.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(DocumentApiActions.init())
  }
}
