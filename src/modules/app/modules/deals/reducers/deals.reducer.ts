import { createReducer, on } from '@ngrx/store';

import {
  DealCreatePageActions, DealApiActions
}               from '@/modules/app/modules/deals/actions'
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
  on(DealApiActions.initSuccess, (state, { firms }) => {
    return { ...state, firms }
  }),
  on(DealApiActions.createSuccess, (state, { firm }) => {
    return { ...state, Firms: [ firm ] }
  }),
);

export const getDeals = (state: State) => state.deals;
