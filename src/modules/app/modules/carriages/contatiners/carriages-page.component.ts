import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromCarriageReducers from '@/modules/app/modules/carriages/reducers';
import { CarriageService }        from "@/modules/app/modules/carriages/services/carriage.service";

import { CarriageApiActions } from '@/modules/app/modules/carriages/actions'


@Component({
  selector: 'app-organisations-page',
  template: `
    <mat-toolbar fxLayout="row">
      <h3>Carriages</h3>
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
              [firms]="firms$ | async"
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
export class CarriagesPageComponent implements OnInit
{
  firms$ = this.store.select(fromCarriageReducers.selectFirms)

  constructor(
    private store: Store<fromCarriageReducers.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(CarriageApiActions.init())
  }
}
