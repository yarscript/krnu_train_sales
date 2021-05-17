import { ActionReducer } from '@ngrx/store';

import * as fromRoot from '@/modules/app/reducers/index';

export function debug(reducer: ActionReducer<fromRoot.State>): ActionReducer<fromRoot.State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}
