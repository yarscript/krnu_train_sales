import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import * as fromEmployeeReduced from '@/modules/app/modules/employees/reducers';
import { EmployeesService }        from "@/modules/app/modules/employees/services/employees.service";

import { EmployeeApiActions } from '@/modules/app/modules/employees/actions'


@Component({
  selector: 'app-employee-page',
  template: `
    <mat-toolbar fxLayout="row">
      <h3>Employees</h3>
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
            <app-employee-list
              [employees]="employees$ | async"
            ></app-employee-list>
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
export class EmployeesPageComponent implements OnInit
{
  employees$ = this.store.select(fromEmployeeReduced.selectEmployees)

  constructor(
    private store: Store<fromEmployeeReduced.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(EmployeeApiActions.init())
  }
}
