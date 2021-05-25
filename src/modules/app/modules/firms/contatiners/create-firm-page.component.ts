import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { Firm }       from "@/modules/app/modules/firms/interfaces/firm-state.interface";
import * as fromFirmReducers from '@/modules/app/modules/firms/reducers';
import { FirmCreatePageActions } from '@/modules/app/modules/firms/actions'


@Component({
  selector: 'app-create-firm-page',
  template: `
    <mat-toolbar>
      <h3>Create Firm</h3>
    </mat-toolbar>
    <mat-grid-list cols="8" rowHeight="400">
      <mat-grid-tile colspan="1"></mat-grid-tile>
      <mat-grid-tile colspan="6">
        <app-firm-form
          (submitted)="onSubmit($event)"
          [pending]="$pending | async"
          [errorMessage]="$error | async"
        ></app-firm-form>
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
export class CreateFirmPageComponent implements OnInit
{
  $pending = this.store.select(fromFirmReducers.selectCreatePagePending);

  $error = this.store.select(fromFirmReducers.selectCreatePageError)

  constructor(private store: Store<fromFirmReducers.State>) {}

  ngOnInit() {}

  onSubmit(firm: Firm) {
    this.store.dispatch(FirmCreatePageActions.create({ firm }))
  }
}
