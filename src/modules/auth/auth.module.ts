import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule }         from '@ngrx/store';
import { EffectsModule }       from '@ngrx/effects';
import { LayoutModule }        from '@angular/cdk/layout';

import { LoginPageComponent } from '@/modules/auth/containers';
import {
  LoginFormComponent,
  LogoutConfirmationDialogComponent,
}                             from '@/modules/auth/components';

import { AuthEffects }       from '@/modules/auth/effects';
import * as fromAuth         from '@/modules/auth/reducers';
import { MaterialModule }    from '@/modules/shared/modules/material';
import { AuthRoutingModule } from './auth-routing.module';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent,
  LogoutConfirmationDialogComponent,
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromAuth.authFeatureKey,
      reducer: fromAuth.reducers,
    }),
    EffectsModule.forFeature([ AuthEffects ]),
  ],
  declarations: COMPONENTS,
  entryComponents: [ LogoutConfirmationDialogComponent ],
})
export class AuthModule
{
}
