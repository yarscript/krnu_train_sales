import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Deal }           from "@/modules/app/modules/deals/interfaces/deal-state.interface";
import * as fromOrganisations     from "@/modules/app/modules/deals/reducers";


@Component({
  selector: 'app-deal-list',
  template:
    `
      <mat-card>

        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Type</th>
          </tr>
          </thead>

          <tbody>
          <tr *ngFor="let deal of deals; index as i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ deal.employee_id }}</td>
            <td>{{ deal.type_id }}</td>
            <td>{{ deal.amount }}</td>
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
export class DealListComponent
{
  @Input() deals: Deal[];

  displayedColumns: string[] = [ 'position', 'name' ];

}
