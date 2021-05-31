import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Carriage }           from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";
import * as fromOrganisations     from "@/modules/app/modules/carriages/reducers";


@Component({
  selector: 'app-carriage-list',
  template:
    `
      <mat-card>

        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">Storage id</th>
            <th scope="col">Number</th>
            <th scope="col">Receiving date</th>
            <th scope="col">Type</th>
          </tr>
          </thead>

          <tbody>
          <tr *ngFor="let carriage of carriages; index as i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ carriage.storage_id }}</td>
            <td>{{ carriage.number }}</td>
            <td>{{ carriage.receiving_date }}</td>
            <td>{{ carriage.type_id }}</td>
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
export class CarriageListComponent
{
  @Input() carriages: Carriage[];

  displayedColumns: string[] = [ 'position', 'name' ];

}
