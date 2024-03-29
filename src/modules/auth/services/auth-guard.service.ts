import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store }       from '@ngrx/store';
import { Observable }  from 'rxjs';
import { map, take }   from 'rxjs/operators';

import { AuthApiActions } from '@/modules/auth/actions';
import * as fromAuth      from '@/modules/auth/reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate
{
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromAuth.selectLoggedIn).pipe(
      map((authed) => {
        if (!authed) {
          this.store.dispatch(AuthApiActions.loginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
