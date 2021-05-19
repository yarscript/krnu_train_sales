import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { Deal }       from "@/modules/app/modules/deals/interfaces/deal-state.interface";
import * as fromDealsReducers from '@/modules/app/modules/deals/reducers';
import { DealCreatePageActions } from '@/modules/app/modules/deals/actions'


@Component({
  selector: 'app-create-organisation-page',
  template: `
    <mat-toolbar>
      <h3>Create Deal</h3>
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
export class CreateDealPageComponent implements OnInit
{
  $pending = this.store.select(fromDealsReducers.selectCreatePagePending);
  $error = this.store.select(fromDealsReducers.selectCreatePageError)

  constructor(private store: Store<fromDealsReducers.State>) {}

  ngOnInit() {}

  onSubmit(organisation: Deal) {
    this.store.dispatch(DealCreatePageActions.create({ organisation }))
  }
}
