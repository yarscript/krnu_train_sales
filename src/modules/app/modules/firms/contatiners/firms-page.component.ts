import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromFirmReducers from '@/modules/app/modules/firms/reducers';
import { FirmService }        from "@/modules/app/modules/firms/services/firm.service";

import { FirmApiActions } from '@/modules/app/modules/firms/actions'


@Component({
  selector: 'app-organisations-page',
  template: `
    <mat-toolbar fxLayout="row">
      <h3>Firms</h3>
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
export class FirmsPageComponent implements OnInit
{
  firms$ = this.store.select(fromFirmReducers.selectFirms)

  constructor(
    private store: Store<fromFirmReducers.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(FirmApiActions.init())
  }
}
