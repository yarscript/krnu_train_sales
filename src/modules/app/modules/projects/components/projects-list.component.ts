import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Organisation }           from "@/modules/app/modules/organisations/interfaces/organisation-state.interface";
import * as fromOrganisations     from "@/modules/app/modules/organisations/reducers";


@Component({
  selector: 'app-projects-list',
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
          <tr *ngFor="let organisation of organisations; index as i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ organisation.name }}</td>
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
export class ProjectsListComponent
{
  @Input() organisations: Organisation[];

  displayedColumns: string[] = [ 'position', 'name' ];

}
