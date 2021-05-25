import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Firm as FirmStateInterface }           from "@/modules/app/modules/firms/interfaces/firm-state.interface";

@Component({
  selector: 'app-firm-form',
  template: `
    <mat-card fxFlexFill>
      <mat-card-title>Firms form</mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutAlign="center start">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field appearance="outline">
              <mat-label>Firm name</mat-label>
              
              <input
                type="text"
                matInput
                placeholder="Ex. pat@example.com"
                formControlName="name"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>Firm address</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="address"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>Firm type</mat-label>
              
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
export class FirmFormComponent implements OnInit
{
  @Input()
  set pending(isPending: boolean) {
    isPending ? this.form.disable() : this.form.enable();
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<FirmStateInterface>();

  form: FormGroup = new FormGroup({
    'name': new FormControl(''),
    'address': new FormControl(''),
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
