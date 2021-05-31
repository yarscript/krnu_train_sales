import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Storage as StorageStateInterface }           from "@/modules/app/modules/storages/interfaces/storage-state.interface";

@Component({
  selector: 'app-storage-form',
  template: `
    <mat-card fxFlexFill>
      <mat-card-title>storages form</mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutAlign="center start">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field appearance="outline">
              <mat-label>storage firm id</mat-label>
              
              <input
                type="text"
                matInput
                placeholder="Title"
                formControlName="firm_id"
              />
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>storage total slost</mat-label>
              
              <input
                type="text"
                matInput
                placeholder=""
                formControlName="total_slots"
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
export class StorageFormComponent implements OnInit
{
  @Input()
  set pending(isPending: boolean) {
    isPending ? this.form.disable() : this.form.enable();
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<StorageStateInterface>();

  form: FormGroup = new FormGroup({
    'firm_id': new FormControl(''),
    'total_slots': new FormControl(''),
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
