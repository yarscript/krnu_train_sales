import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store }                                   from '@ngrx/store';
import { FormGroup }                               from "@angular/forms";

import { EmployeeStateInterface }       from "@/modules/app/modules/employees/interfaces/employee-state.interface";
import * as fromEmployeeReducer from '@/modules/app/modules/employees/reducers';
import { EmployeeCreatePageActions } from '@/modules/app/modules/employees/actions'


@Component({
  selector: 'app-create-organisation-page',
  template: `
    <mat-toolbar>
      <h3>Create Employee</h3>
    </mat-toolbar>
    <mat-grid-list cols="8" rowHeight="400">
      <mat-grid-tile colspan="1"></mat-grid-tile>
      <mat-grid-tile colspan="6">
        <app-employee-form
            fxFill
          (submitted)="onSubmit($event)"
          [pending]="$pending | async"
          [errorMessage]="$error | async"
        ></app-employee-form>
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
export class CreateEmployeePageComponent implements OnInit
{
  $pending = this.store.select(fromEmployeeReducer.selectCreatePagePending);
  $error = this.store.select(fromEmployeeReducer.selectCreatePageError)

  constructor(private store: Store<fromEmployeeReducer.State>) {}

  ngOnInit() {}

  onSubmit(employee: EmployeeStateInterface) {
    console.log('employee SUBMITING', employee);

    this.store.dispatch(EmployeeCreatePageActions.create({ employee }))
  }
}
