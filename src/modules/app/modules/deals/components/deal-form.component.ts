import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Deal }           from "@/modules/app/modules/deals/interfaces/deal-state.interface";

@Component({
  selector: 'app-organisation-form',
  template: `
    <mat-card fxFlexFill>
      <mat-card-title>Deals form</mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutAlign="center start">
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field appearance="outline">
              <mat-label>Deal Name</mat-label>
              <input
                type="text"
                matInput
                placeholder="Ex. pat@example.com"
                formControlName="name"
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
export class DealFormComponent implements OnInit
{
  @Input()
  set pending(isPending: boolean) {
    isPending ? this.form.disable() : this.form.enable();
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<Deal>();

  form: FormGroup = new FormGroup({
    'name': new FormControl('')
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