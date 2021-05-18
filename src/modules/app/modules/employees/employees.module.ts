import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule }         from "@ngrx/store";
import { EffectsModule }       from "@ngrx/effects";

import { MaterialModule }     from "@/modules/shared/modules/material";
import { EmployeeEffects }            from "@/modules/app/modules/employees/effects/employee.effects";
import { EmployeesRoutingModule } from './employees-routing.module';

import * as fromPages         from './contatiners';
import * as fromComponents    from './components';
import * as fromEmployeeReducers from './reducers';

export const COMPONENTS = [
  fromPages.EmployeesPageComponent,
  fromPages.CreateEmployeePageComponent,

  fromComponents.EmployeeFormComponent,
  fromComponents.EmployeeListComponent,
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromEmployeeReducers.organisationFeatureKey,
      reducer: fromEmployeeReducers.reducers,
    }),
    EffectsModule.forFeature([ EmployeesModule ])
  ]
})
export class EmployeesModule
{
}
