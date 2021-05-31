import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromCarriageReducers from '@/modules/app/modules/carriages/reducers';
import { CarriageService }        from "@/modules/app/modules/carriages/services/carriage.service";

import { CarriageApiActions } from '@/modules/app/modules/carriages/actions'


@Component({
  selector: 'app-carriages-page',
  template: `
    <mat-toolbar fxLayout="row">
      <h3>carriages</h3>
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
            <app-carriage-list
              [carriages]="carriages$ | async"
            ></app-carriage-list>
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
export class CarriagesPageComponent implements OnInit
{
  carriages$ = this.store.select(fromCarriageReducers.selectCarriages)

  constructor(
    private store: Store<fromCarriageReducers.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(CarriageApiActions.init())
  }
}
