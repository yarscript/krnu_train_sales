import {
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
  Action,
  ActionReducerMap,
}                         from '@ngrx/store';
import { environment }    from '@/environments/environment';
import * as fromRouter    from '@ngrx/router-store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromLayout    from '@/modules/core/reducers/layout.reducer';
import { InjectionToken } from '@angular/core';

import { debug, initStateFromLocalStorage } from "@/modules/core/meta-reducers";


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State
{
  [fromLayout.layoutFeatureKey]: fromLayout.State;
  router: fromRouter.RouterReducerState<any>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>(
  'Root reducers token',
  {
    factory: () => ({
      [fromLayout.layoutFeatureKey]: fromLayout.reducer,
      router: fromRouter.routerReducer,
    }),
  }
);

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [ debug, initStateFromLocalStorage ]
  : [ initStateFromLocalStorage ];

/**
 * Layout Selectors
 */
export const selectLayoutState = createFeatureSelector<State, fromLayout.State>(
  fromLayout.layoutFeatureKey
);

export const selectShowSidenav = createSelector(
  selectLayoutState,
  fromLayout.selectShowSidenav
);

/**
 * Router Selectors
 */
export const selectRouter = createFeatureSelector<State,
  fromRouter.RouterReducerState>('router');

export const { selectRouteData } = fromRouter.getSelectors(selectRouter);
