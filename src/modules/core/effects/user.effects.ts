import { Injectable } from '@angular/core';

import { fromEvent, merge, timer } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';

import { createEffect } from '@ngrx/effects';
import { UserActions } from '@/modules/core/actions';

@Injectable()
export class UserEffects {

}
