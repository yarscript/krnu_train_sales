import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromOrganisations from '@/modules/app/modules/firms/reducers';
import { FirmService }        from "@/modules/app/modules/firms/services/firm.service";

import { OrganisationApiActions } from '@/modules/app/modules/firms/actions'


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
              [organisations]="organisations$ | async"
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
  organisations$ = this.store.select(fromOrganisations.selectOrganisations)

  constructor(
    private store: Store<fromOrganisations.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(OrganisationApiActions.init())
  }
}
