import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';
import { Observable }        from "rxjs";

import * as fromServicePlanList       from '@/modules/app/modules/service-plan/reducers'
import { ServicePlan }                from "@/modules/app/modules/service-plan/interfaces/service-plan.interface";
import { ServicePlanListPageActions } from "@/modules/app/modules/service-plan/actions";
import { ServicePlanPageActions }     from '@/modules/app/modules/user/actions';
import { Organisation }               from "@/modules/app/modules/organisations/interfaces/organisation-state.interface";


@Component({
  selector: 'app-service-plan-page',
  template: `
    <mat-toolbar>
      <h3>Select Service Plan</h3>
    </mat-toolbar>
    <mat-tab-group>
      <mat-tab label="Active">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Mat Card Title</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <app-service-plan-select
              [servicePlanList]="servicePlanList$ | async"
              (selected)="onSelected($event)"
            ></app-service-plan-select>
            <button
              mat-raised-button
              color="primary"
              (click)="apply()"
            >Apply
            </button>
          </mat-card-content>
        </mat-card>
      </mat-tab>
      <mat-tab label="Archived">Content 2</mat-tab>
      <mat-tab label="Content3">Content 3</mat-tab>
    </mat-tab-group>
    <!--    <h1 >Organisations</h1>-->
  `,
  styles: [
    `

    `
  ],
})
export class ServicePlanPageComponent implements OnInit
{
  public servicePlanList$: Observable<ServicePlan[]>;

  public selectedServicePlan$: ServicePlan;

  constructor(
    private servicePlanStore: Store<fromServicePlanList.State>
  ) {
    this.servicePlanList$ = this.servicePlanStore.select(fromServicePlanList.selectServicePlanList)
  }

  ngOnInit() {
    this.servicePlanStore.dispatch(ServicePlanListPageActions.init())
  }

  apply() {
    this.servicePlanStore.dispatch(
      ServicePlanPageActions.selectServicePlan({ selectedServicePlan: this.selectedServicePlan$ })
    )
  }

  onSelected(servicePlan: ServicePlan) {
    this.selectedServicePlan$ = servicePlan;
  }

  onSubmit(organisation: Organisation) {

  }
}
