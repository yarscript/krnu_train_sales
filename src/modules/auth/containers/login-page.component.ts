import { Component, OnInit }  from '@angular/core';
import { Store }              from '@ngrx/store';
import { BreakpointObserver } from "@angular/cdk/layout";

import { Credentials }      from '@/modules/auth/models';
import * as fromAuth        from '@/modules/auth/reducers';
import { LoginPageActions } from '@/modules/auth/actions';

@Component({
  selector: 'app-login-page',
  template: `
    <mat-grid-list cols="3" fxLayout="row wrap" fxLayout.sm="column wrap">
      <mat-grid-tile fxLayout.sm="column"></mat-grid-tile>
      <mat-grid-tile fxLayout.sm="column">
        <app-login-form
          (submitted)="onSubmit($event)"
          [pending]="pending$ | async"
          [errorMessage]="error$ | async"
        >
        </app-login-form>
      </mat-grid-tile>
      <mat-grid-tile fxLayout.sm="column"></mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
    `
      mat-grid-list {
        height: 100%;
      }
    `
  ],
})
export class LoginPageComponent implements OnInit
{
  pending$ = this.store.select(fromAuth.selectLoginPagePending);
  error$ = this.store.select(fromAuth.selectLoginPageError);

  constructor(
    private store: Store<fromAuth.State>,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {}

  onSubmit(credentials: Credentials) {
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
