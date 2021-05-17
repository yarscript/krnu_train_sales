import { createReducer, on } from '@ngrx/store';

import { LayoutActions } from '@/modules/core/actions';
// import { AuthActions } from '@/modules/auth/actions';

export const layoutFeatureKey = 'layout';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export const reducer = createReducer(
  initialState,
  // Even thought the `state` is unused, it helps infer the return type
  on(LayoutActions.closeSidenav, (state) => ({ showSidenav: false })),
  on(LayoutActions.openSidenav, (state) => ({ showSidenav: true })),
  on(LayoutActions.toggleSidenav, (state, { showSidenav }) => ({ showSidenav })),
  // on(AuthActions.logoutConfirmation, (state) => ({ showSidenav: false }))
);

export const selectShowSidenav = (state: State) => state.showSidenav;
