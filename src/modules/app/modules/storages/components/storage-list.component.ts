import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Storage }           from "@/modules/app/modules/storages/interfaces/storage-state.interface";
import * as fromOrganisations     from "@/modules/app/modules/storages/reducers";


@Component({
  selector: 'app-storage-list',
  template:
    `
      <mat-card>

        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Storage firm id</th>
            <th scope="col">Total slots</th>
          </tr>
          </thead>

          <tbody>
          <tr *ngFor="let storage of storages; index as i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ storage.storage_id }}</td>
            <td>{{ storage.firm_id }}</td>
            <td>{{ storage.total_slots }}</td>
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
export class StorageListComponent
{
  @Input() storages: Storage[];

  displayedColumns: string[] = [ 'position', 'name' ];

}
