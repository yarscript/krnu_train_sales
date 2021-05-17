import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from '../local-storage/local-storage.service';
import * as fromRoot           from '@/modules/app/reducers/index';


export function initStateFromLocalStorage(reducer: ActionReducer<fromRoot.State>): ActionReducer<fromRoot.State> {
  return function (state, action) {
    const newState = reducer(state, action);
    const localStorageInitialState = LocalStorageService.loadInitialState();

    if (
      [ INIT.toString(), UPDATE.toString() ]
        .includes(action.type) && Object.values(localStorageInitialState).pop() !== null
    ) {
      return { ...newState, ...LocalStorageService.loadInitialState() };
    }
    return newState;
  };
}
