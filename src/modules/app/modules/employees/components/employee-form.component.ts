import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { EmployeeStateInterface }           from "@/modules/app/modules/employees/interfaces/employee-state.interface";

@Component({
  selector: 'app-employee-form',
  template: `
    <mat-card fxFlexFill>
      <mat-card-title>Employee form</mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutAlign="center start">
        <form [formGroup]="form" (ngSubmit)="submit()">
            <mat-form-field appearance="outline">
              <mat-label>Employee first name</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="first_name"
              />
            </mat-form-field>
          
            <mat-form-field appearance="outline">
              <mat-label>Employee last name</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="last_name"
              />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Employee position_id</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="position_id"
              />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Employee city</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="city"
              />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Employee address</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="address"
              />
            </mat-form-field>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>Employee postal code</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="postal_code"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>Employee firm id</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="firm_id"
              />
            </mat-form-field>
          </p>

          <mat-card-footer fxLayout="right">

            <p *ngIf="errorMessage" class="loginError">
              {{ errorMessage }}
            </p>

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
export class EmployeeFormComponent implements OnInit
{
  @Input()
  set pending(isPending: boolean) {
    isPending ? this.form.disable() : this.form.enable();
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<EmployeeStateInterface>();

  form: FormGroup = new FormGroup({
    'first_name': new FormControl(''),
    'last_name': new FormControl(),
    'position_id': new FormControl(),
    'city': new FormControl(),
    'address': new FormControl(),
    'postal_code': new FormControl(),
    'firm_id': new FormControl(),

  });

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log('submitted');
    if (this.form.valid) {
      console.log('validated');

      this.submitted.emit(this.form.value)
    }
  }
}
