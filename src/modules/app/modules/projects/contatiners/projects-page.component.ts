import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromOrganisations from '@/modules/app/modules/firms/reducers';
import { FirmService }        from "@/modules/app/modules/firms/services/firm.service";

// import { OrganisationApiActions } from '@/modules/app/modules/firms/actions'


@Component({
  selector: 'app-organisations-page',
  template: `
    <mat-toolbar fxLayout="row">
      <h3>Projects</h3>
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
<!--            <app-organisation-list-->
<!--              [organisations]="organisations$ | async"-->
<!--            ></app-organisation-list>-->
          </mat-tab>
        </mat-tab-group>
<!--    <h1 >Organisations</h1>-->
  `,
  styles: [
    `

    `
  ],
})
export class ProjectsPageComponent implements OnInit
{
  // organisations$ = this.store.select(fromOrganisations.selectOrganisations)

  constructor(
    private store: Store<fromOrganisations.State>,
    private organisationService$: FirmService
  ) {}

  ngOnInit() {
    // this.store.dispatch(OrganisationApiActions.init())
  }
}
