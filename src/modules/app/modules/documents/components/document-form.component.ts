import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Document as DocumentStateInterface }           from "@/modules/app/modules/documents/interfaces/document-state.interface";

@Component({
  selector: 'app-document-form',
  template: `
    <mat-card fxFlexFill>
      <mat-card-title>documents form</mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutAlign="center start">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field appearance="outline">
              <mat-label>document type id</mat-label>
              
              <input
                type="text"
                matInput
                placeholder="Title"
                formControlName="type_id"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>document deal id</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="deal_id"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>document completion date</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="completion_date"
              />
            </mat-form-field>
          </p>
          
          <mat-card-footer fxLayout="right">

            <p *ngIf="errorMessage" class="loginError">
              {{ errorMessage }}
            </p>

<!--            Submit-->
            <p class="loginButtons">
              <button type="submit" mat-raised-button color="primary">Create</button>
            </p>

          </mat-card-footer>
        </form>

      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `

    `
  ],
})
export class DocumentFormComponent implements OnInit
{
  @Input()
  set pending(isPending: boolean) {
    isPending ? this.form.disable() : this.form.enable();
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<DocumentStateInterface>();

  form: FormGroup = new FormGroup({
    'deal_id': new FormControl(''),
    'type_id': new FormControl(''),
    'completion_date': new FormControl('')
  });

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log('submitted');
    if (this.form.valid) {
      console.log('validated and sending', this.form.value);

      this.submitted.emit(this.form.value)
    }
  }
}
