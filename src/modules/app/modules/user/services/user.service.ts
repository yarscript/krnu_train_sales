import { Injectable } from '@angular/core';

import * as fromUser   from '@/modules/app/modules/user/reducers';
import { UserActions } from '@/modules/app/modules/user/actions'
import { Store }       from "@ngrx/store";


@Injectable({
  providedIn: "root"
})
export class UserService
{
  constructor(
    private store: Store<fromUser.State>
  ) {}

  init() {
    this.store.dispatch(UserActions.init())
  }
}
