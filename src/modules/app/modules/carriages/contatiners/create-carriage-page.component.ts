import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { Carriage }       from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";
import * as fromCarriageReducer from '@/modules/app/modules/carriages/reducers';
import { CarriageCreatePageActions } from '@/modules/app/modules/carriages/actions'


@Component({
  selector: 'app-create-organisation-page',
  template: `
    <mat-toolbar>
      <h3>Create Carriage</h3>
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
export class CreateCarriagePageComponent implements OnInit
{
  $pending = this.store.select(fromCarriageReducer.selectCreatePagePending);
  $error = this.store.select(fromCarriageReducer.selectCreatePageError)

  constructor(private store: Store<fromCarriageReducer.State>) {}

  ngOnInit() {}

  onSubmit(carriage: Carriage) {
    this.store.dispatch(CarriageCreatePageActions.create({ carriage }))
  }
}
