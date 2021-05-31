import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Deal as DealStateInterface }           from "@/modules/app/modules/deals/interfaces/deal-state.interface";

@Component({
  selector: 'app-deal-form',
  template: `
    <mat-card fxFlexFill>
      <mat-card-title>deals form</mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutAlign="center start">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field appearance="outline">
              <mat-label>deal type id</mat-label>
              
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
              <mat-label>deal employee id</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="employee_id"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>deal amount</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="amount"
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
export class DealFormComponent implements OnInit
{
  @Input()
  set pending(isPending: boolean) {
    isPending ? this.form.disable() : this.form.enable();
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<DealStateInterface>();

  form: FormGroup = new FormGroup({
    'employee_id': new FormControl(''),
    'type_id': new FormControl(''),
    'amount': new FormControl('')
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
