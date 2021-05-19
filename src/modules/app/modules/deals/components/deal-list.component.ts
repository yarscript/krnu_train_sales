import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Deal }           from "@/modules/app/modules/deals/interfaces/deal-state.interface";


@Component({
  selector: 'app-organisation-list',
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
          <tr *ngFor="let deal of deals; index as i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ firm.name }}</td>
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
