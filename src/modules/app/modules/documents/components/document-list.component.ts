import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Document }           from "@/modules/app/modules/documents/interfaces/document-state.interface";
import * as fromOrganisations     from "@/modules/app/modules/documents/reducers";


@Component({
  selector: 'app-document-list',
  template:
    `
      <mat-card>

        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Document id</th>
            <th scope="col">Type</th>
            <th scope="col">Completion date</th>
          </tr>
          </thead>

          <tbody>
          <tr *ngFor="let document of documents; index as i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ document.document_id }}</td>
            <td>{{ document.deal_id }}</td>
            <td>{{ document.type_id }}</td>
            <td>{{ document.completion_date }}</td>
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
export class DocumentListComponent
{
  @Input() documents: Document[];

  displayedColumns: string[] = [ 'position', 'name' ];

}
