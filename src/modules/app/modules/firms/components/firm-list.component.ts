import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Firm }           from "@/modules/app/modules/firms/interfaces/firm-state.interface";
import * as fromOrganisations     from "@/modules/app/modules/firms/reducers";


@Component({
  selector: 'app-firm-list',
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
          <tr *ngFor="let firm of firms; index as i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ firm.name }}</td>
            <td>{{ firm.address }}</td>
            <td>{{ firm.type_id }}</td>
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
export class FirmListComponent
{
  @Input() firms: Firm[];

  displayedColumns: string[] = [ 'position', 'name' ];

}
