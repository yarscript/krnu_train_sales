import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromDealReducers from '@/modules/app/modules/deals/reducers';
import { DealService }        from "@/modules/app/modules/deals/services/deal.service";

import { DealApiActions } from '@/modules/app/modules/deals/actions'


@Component({
  selector: 'app-organisations-page',
  template: `
    <mat-toolbar fxLayout="row">
      <h3>Deals</h3>
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
              [deals]="deals$ | async"
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
export class DealsPageComponent implements OnInit
{
  deals$ = this.store.select(fromDealReducers.selectDeals)

  constructor(
    private store: Store<fromDealReducers.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(DealApiActions.init())
  }
}
