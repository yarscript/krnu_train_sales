import { createReducer, on } from '@ngrx/store';

import {
  DealApiActions, DealCreatePageActions
}                                            from '@/modules/app/modules/deals/actions'
import { Deal } from "@/modules/app/modules/deals/interfaces/deal-state.interface";


export const DealFeatureKey = 'deal';

export interface State
{
  // user: User | null;
  deals: Deal[]
}

export const initialState: State = {
  deals: []
};

export const reducer = createReducer(
  initialState,
  on(DealApiActions.initSuccess, (state, { deals }) => {
    return { ...state, deals }
  }),
  on(DealApiActions.createSuccess, (state, { deal }) => {
    return { ...state, deals: [ deal ] }
  }),
);

export const getDeals = (state: State) => state.deals;
