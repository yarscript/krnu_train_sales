import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { Organisation }                  from "@/modules/app/modules/organisations/interfaces/organisation-state.interface";
import * as fromOrganisations            from '@/modules/app/modules/organisations/reducers';
import { OrganisationCreatePageActions } from '@/modules/app/modules/organisations/actions'


@Component({
  selector: 'app-create-organisation-page',
  template: `
    <mat-toolbar>
      <h3>Create Organisation</h3>
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
export class CreateOrganisationPageComponent implements OnInit
{
  $pending = this.store.select(fromOrganisations.selectCreatePagePending);
  $error = this.store.select(fromOrganisations.selectCreatePageError)

  constructor(private store: Store<fromOrganisations.State>) {}

  ngOnInit() {}

  onSubmit(organisation: Organisation) {
    this.store.dispatch(OrganisationCreatePageActions.create({ organisation }))
  }
}
