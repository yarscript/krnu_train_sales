import { createAction, props }  from '@ngrx/store';
import { Observable } from "rxjs";

export const openSidenav = createAction('[Layout] Open Sidenav');
export const closeSidenav = createAction('[Layout] Close Sidenav');
export const toggleSidenav = createAction(
  '[Layout] Show Sidenav', props<{ showSidenav: boolean }>()
  );
