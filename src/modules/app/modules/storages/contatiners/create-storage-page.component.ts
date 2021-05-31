import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { Storage }       from "@/modules/app/modules/storages/interfaces/storage-state.interface";
import * as fromStorageReducers from '@/modules/app/modules/storages/reducers';
import { StorageCreatePageActions } from '@/modules/app/modules/storages/actions'


@Component({
  selector: 'app-create-storage-page',
  template: `
    <mat-toolbar>
      <h3>Create deal</h3>
    </mat-toolbar>
    <mat-grid-list cols="8" rowHeight="400">
      <mat-grid-tile colspan="1"></mat-grid-tile>
      <mat-grid-tile colspan="6">
        <app-storage-form
          (submitted)="onSubmit($event)"
          [pending]="$pending | async"
          [errorMessage]="$error | async"
        ></app-storage-form>
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
export class CreateStoragePageComponent implements OnInit
{
  $pending = this.store.select(fromStorageReducers.selectCreatePagePending);

  $error = this.store.select(fromStorageReducers.selectCreatePageError)

  constructor(private store: Store<fromStorageReducers.State>) {}

  ngOnInit() {}

  onSubmit(storage: Storage) {
    this.store.dispatch(StorageCreatePageActions.create({ storage }))
  }
}
