import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromStorageReducers from '@/modules/app/modules/storages/reducers';
import { StorageService }        from "@/modules/app/modules/storages/services/storage.service";

import { StorageApiActions } from '@/modules/app/modules/storages/actions'


@Component({
  selector: 'app-organisations-page',
  template: `
    <mat-toolbar fxLayout="row">
      <h3>Storages</h3>
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
            <app-organisation-list
              [storages]="storages$ | async"
            ></app-organisation-list>
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
export class StoragesPageComponent implements OnInit
{
  storages$ = this.store.select(fromStorageReducers.selectStorages)

  constructor(
    private store: Store<fromStorageReducers.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(StorageApiActions.init())
  }
}
