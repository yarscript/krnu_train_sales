import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromOrganisations  from '@/modules/app/modules/organisations/reducers';
import { OrganisationService } from "@/modules/app/modules/organisations/services/organisation.service";



@Component({
  selector: 'app-organisations-page',
  template: `
    <mat-toolbar>
      <h3>Create Project</h3>
    </mat-toolbar>
    <mat-grid-list cols="8" rowHeight="400">
      <mat-grid-tile colspan="1"></mat-grid-tile>
      <mat-grid-tile colspan="6">
        <app-projects-form
          fxFill
        ></app-projects-form>
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
export class CreateProjectPageComponent implements OnInit
{
  organisations$ = this.store.select(fromOrganisations.selectOrganisations)

  constructor(
    private store: Store<fromOrganisations.State>,
    private organisationService$: OrganisationService
  ) {}

  ngOnInit() {
    // this.store.dispatch(OrganisationApiActions.init())
  }
}
