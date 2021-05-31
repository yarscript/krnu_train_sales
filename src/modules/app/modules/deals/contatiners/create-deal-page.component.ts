import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { Deal }       from "@/modules/app/modules/deals/interfaces/deal-state.interface";
import * as fromDealReducers from '@/modules/app/modules/deals/reducers';
import { DealCreatePageActions } from '@/modules/app/modules/deals/actions'


@Component({
  selector: 'app-create-deal-page',
  template: `
    <mat-toolbar>
      <h3>Create deal</h3>
    </mat-toolbar>
    <mat-grid-list cols="8" rowHeight="400">
      <mat-grid-tile colspan="1"></mat-grid-tile>
      <mat-grid-tile colspan="6">
        <app-deal-form
          (submitted)="onSubmit($event)"
          [pending]="$pending | async"
          [errorMessage]="$error | async"
        ></app-deal-form>
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
export class CreateDealPageComponent implements OnInit
{
  $pending = this.store.select(fromDealReducers.selectCreatePagePending);

  $error = this.store.select(fromDealReducers.selectCreatePageError)

  constructor(private store: Store<fromDealReducers.State>) {}

  ngOnInit() {}

  onSubmit(deal: Deal) {
    this.store.dispatch(DealCreatePageActions.create({ deal }))
  }
}
