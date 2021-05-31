import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Carriage as CarriageStateInterface }           from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";

@Component({
  selector: 'app-carriage-form',
  template: `
    <mat-card fxFlexFill>
      <mat-card-title>carriages form</mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutAlign="center start">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field appearance="outline">
              <mat-label>carriage storage id</mat-label>
              
              <input
                type="text"
                matInput
                placeholder="Title"
                formControlName="storage_id"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>carriage number</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="number"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>carriage receiving date</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="receiving_date"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>carriage type id</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="type_id"
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
export class CarriageFormComponent implements OnInit
{
  @Input()
  set pending(isPending: boolean) {
    isPending ? this.form.disable() : this.form.enable();
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<CarriageStateInterface>();

  form: FormGroup = new FormGroup({
    'storage_id': new FormControl(''),
    'number': new FormControl(''),
    'receiving_date': new FormControl(''),
    'type_id': new FormControl('')
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
