import { Component, OnInit }      from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Store }                  from '@ngrx/store';

import * as fromServicePlanList from "@/modules/app/modules/service-plan/reducers";
import { Observable }           from "rxjs";
import { ServicePlan }          from "@/modules/app/modules/service-plan/interfaces/service-plan.interface";


@Component({
  selector: 'app-user-profile-page',
  template:
    `
      <mat-grid-list cols="8" rowHeight="100px" fxLayout="row wrap" fxLayout.sm="column wrap">
        <mat-grid-tile colspan="3" rowspan="6" class="p-1">

          <div
            fxFill
            fxFlex="90"
            fxLayoutAlign="space-around none"
            fxLayout="column wrap" fxLayoutGap="15px"
          >
            <!--            <div class="m-2">-->
            <mat-card fxLayout="column wrap" fxLayoutAlign="start none" fxFlex="50"
                      class="mat-elevation-z2 overflow-auto">
              <mat-card-header>
                <mat-toolbar>
                  <h3>User Some Data and statistic</h3>
                </mat-toolbar>
              </mat-card-header>
              <mat-card-content>
                Data:
                <br> created_at | updated_at | deleted_at |
              </mat-card-content>
            </mat-card>

            <mat-card fxLayout="column wrap" fxFlex="40" fxLayoutAlign="start none" class="mat-elevation-z2">
              <mat-card-header>
                <h4>Projects</h4>
              </mat-card-header>
              <mat-card-content>
                List with actions
              </mat-card-content>
            </mat-card>
          </div>
          <!--          </div>-->
        </mat-grid-tile>


        <mat-grid-tile colspan="5" rowspan="6" class="p-1">
          <div
            fxFill
            fxFlex="95"
            fxLayoutAlign="space-around none"
            fxLayout="column wrap"
            fxLayoutGap="15px"
          >
            <mat-card fxLayout="column wrap" fxLayoutAlign="start none" fxFlex="95" class="mat-elevation-z2">
              <mat-card-content>
                <form [formGroup]="form" (ngSubmit)="submit()">
                  <div fxLayout="row wrap" fxLayoutAlign="center start" fxFill fxLayoutGap="15px">

                    <mat-card-subtitle fxFlexFill fxFlexOffset="2" class="mb-2 mt-2"><h6>User Info</h6>
                    </mat-card-subtitle>

                    <mat-form-field fxFlex appearance="standard">
                      <mat-label>Service Plan</mat-label>
                      <mat-select>
                        <mat-option
                        >{{ 'Test' }}</mat-option>
                      </mat-select>
                    </mat-form-field>

                    <mat-form-field fxFlex="65" appearance="standard">
                      <mat-label>Email</mat-label>
                      <input
                        type="text" matInput placeholder="Ex. pat@example.com"
                      />
                    </mat-form-field>

                    <mat-form-field fxFlex appearance="standard">
                      <mat-label>First Name</mat-label>

                      <input
                        type="text" matInput placeholder="Ex. pat@example.com"
                      />
                    </mat-form-field>

                    <mat-form-field fxFlex appearance="standard">
                      <mat-label>Last Name</mat-label>
                      <input
                        type="text" matInput placeholder="Ex. pat@example.com"
                      />
                    </mat-form-field>

                    <mat-card-subtitle fxFlexFill fxFlexOffset="2" class="mt-3"><h6>User Address</h6>
                    </mat-card-subtitle>

                    <mat-form-field fxFlexFill fxFlexOffset="2" appearance="standard">
                      <mat-label>Address</mat-label>
                      <input
                        type="text" matInput placeholder="Address"
                      />
                    </mat-form-field>

                    <mat-form-field fxFlex appearance="standard">
                      <mat-label>City</mat-label>

                      <input
                        type="text" matInput placeholder="Address"
                      />
                    </mat-form-field>

                    <mat-form-field fxFlex appearance="standard">
                      <mat-label>Country</mat-label>
                      <input
                        type="text" matInput placeholder="Address"
                      />
                    </mat-form-field>

                    <mat-form-field fxFlex appearance="standard">
                      <mat-label>Postal Code</mat-label>
                      <input
                        type="text" matInput placeholder="Address"
                      />
                    </mat-form-field>
                    <div fxFlexFill fxLayoutAlign="end null">
                      <button
                        type="submit" mat-raised-button color="primary" mat-button
                      >Update
                      </button>
                    </div>
                  </div>
                </form>

              </mat-card-content>
            </mat-card>

          </div>
        </mat-grid-tile>

      </mat-grid-list>
      <!--                <p>-->
      <!--                  Inputs: <br>first_name | last_name | email | service_plan_id | service_plan_uuid | service_plan_status-->
      <!--                </p>-->
      <!--                <p>-->
      <!--                  Other: <br> User Billing + User Settings-->
      <!--                </p>-->
    `,
  styles: [
    `
    `
  ],
})
export class ProfilePageComponent implements OnInit
{
  public servicePlanList$: Observable<ServicePlan[]>;

  public selectedServicePlan$: ServicePlan;

  form: FormGroup = new FormGroup({
    name: new FormControl('')
  })

  constructor(
    private servicePlanStore: Store<fromServicePlanList.State>
  ) {
    this.servicePlanList$ = this.servicePlanStore.select(fromServicePlanList.selectServicePlanList)
  }

  ngOnInit() {}

  submit() {

  }
}
