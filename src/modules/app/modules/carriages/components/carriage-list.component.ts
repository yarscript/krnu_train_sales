import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Carriage }           from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";
import * as fromOrganisations     from "@/modules/app/modules/firms/reducers";


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
          <tr *ngFor="let firm of firms; index as i">
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
export class CarriageListComponent
{
  @Input() firms: Carriage[];

  displayedColumns: string[] = [ 'position', 'name' ];

}
