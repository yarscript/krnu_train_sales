import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { EmployeeStateInterface }           from "@/modules/app/modules/employees/interfaces/employee-state.interface";
import * as fromEmployeeReducer     from "@/modules/app/modules/employees/reducers";


@Component({
  selector: 'app-employee-list',
  template:
    `
      <mat-card>

        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
          </thead>

          <tbody>
          <tr *ngFor="let employee of employees; index as i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ employee.first_name + employee.last_name }}</td>
          </tr>
          </tbody>
        </table>

      </mat-card>
    `,
  styles: [
    `

    `
  ],
})
export class EmployeeListComponent
{
  @Input() employees: EmployeeStateInterface[];

  displayedColumns: string[] = [ 'position', 'name' ];

}
