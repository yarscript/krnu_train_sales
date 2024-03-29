import { NgModule }                            from '@angular/core';
import { CommonModule }                        from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule }                       from '@angular/platform-browser';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';

import { StoreModule }                              from '@ngrx/store';
import { EffectsModule }                            from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule }                      from '@ngrx/store-devtools';
import { NgbModule }                                from '@ng-bootstrap/ng-bootstrap';

import { ROUTES_CONFIG, RoutesConfig } from '@/config/routes.config';

import { ROOT_REDUCERS, metaReducers } from '@/modules/app/reducers';

import { CoreModule }                 from '@/modules/core';
import { HttpModule }                 from "@/modules/http/http.module";
import { AuthModule }                 from '@/modules/auth';
import { AppRoutingModule }           from '@/modules/app/app-routing.module';
import { UserEffects, RouterEffects } from '@/modules/core/effects';
import { AppComponent }               from '@/modules/core/containers';
import { ProgressInterceptor }        from "@/modules/core/interceptors/progress.interceptor";
import { ProgressBarService }         from "@/modules/core/services";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot(),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: 'NgRx Time Tracker App',

      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://ngrx.io/guide/effects#registering-root-effects
     */
    EffectsModule.forRoot([ UserEffects, RouterEffects ]),
    CoreModule,
    HttpModule,
    AuthModule,
    // HomeModule,
  ],
  providers: [
    { provide: ROUTES_CONFIG, useValue: RoutesConfig },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule
{
}
