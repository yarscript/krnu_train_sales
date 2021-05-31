import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { Carriage }       from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";
import * as fromCarriageReducers from '@/modules/app/modules/carriages/reducers';
import { CarriageCreatePageActions } from '@/modules/app/modules/carriages/actions'


@Component({
  selector: 'app-create-carriage-page',
  template: `
    <mat-toolbar>
      <h3>Create carriage</h3>
    </mat-toolbar>
    <mat-grid-list cols="8" rowHeight="400">
      <mat-grid-tile colspan="1"></mat-grid-tile>
      <mat-grid-tile colspan="6">
        <app-carriage-form
          (submitted)="onSubmit($event)"
          [pending]="$pending | async"
          [errorMessage]="$error | async"
        ></app-carriage-form>
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
export class CreateCarriagePageComponent implements OnInit
{
  $pending = this.store.select(fromCarriageReducers.selectCreatePagePending);

  $error = this.store.select(fromCarriageReducers.selectCreatePageError)

  constructor(private store: Store<fromCarriageReducers.State>) {}

  ngOnInit() {}

  onSubmit(carriage: Carriage) {
    this.store.dispatch(CarriageCreatePageActions.create({ carriage }))
  }
}
