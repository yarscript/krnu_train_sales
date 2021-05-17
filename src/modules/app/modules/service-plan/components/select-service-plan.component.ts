import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store }                                          from '@ngrx/store';

import * as fromServicePlanList       from '@/modules/app/modules/service-plan/reducers'
import { ServicePlanListPageActions } from '@/modules/app/modules/service-plan/actions'
import { ServicePlan }                from '@/modules/app/modules/service-plan/interfaces/service-plan.interface'
import { Observable }                 from "rxjs";


/**
 * The dialog will close with true if user clicks the ok button,
 * otherwise it will close with undefined.
 */
@Component({
  selector: 'app-service-plan-select',
  template:
    `
      <h4>mat-select</h4>
      <mat-form-field appearance="fill">
        <mat-label>Choose an option</mat-label>
        <mat-select>
          <mat-option
            *ngFor="let servicePlan of servicePlanList"
            [value]="servicePlan.service_plan_uuid"
            (onSelectionChange)="onSelect(servicePlan)"
          >{{ servicePlan.name }}</mat-option>
        </mat-select>
      </mat-form-field>
    `,
  styles: [
    `
    `,
  ],
})
export class SelectServicePlanComponent implements OnInit
{
  @Input() servicePlanList: ServicePlan[];

  @Output() selected = new EventEmitter<ServicePlan>();

  constructor() {}

  ngOnInit() {}

  public onSelect(servicePlan: ServicePlan) {
    this.selected.emit(servicePlan);
  }
}
