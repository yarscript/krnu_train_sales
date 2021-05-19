import { createReducer, on } from '@ngrx/store';

import {
  FirmApiActions, FirmCreatePageActions
}                                            from '@/modules/app/modules/firms/actions'
import { Firm } from "@/modules/app/modules/firms/interfaces/firm-state.interface";


export const FirmFeatureKey = 'firm';

export interface State
{
  // user: User | null;
  firms: Firm[]
}

export const initialState: State = {
  firms: []
};

export const reducer = createReducer(
  initialState,
  on(FirmApiActions.initSuccess, (state, { firms }) => {
    return { ...state, firms }
  }),
  on(FirmApiActions.createSuccess, (state, { firm }) => {
    return { ...state, Firms: [ firm ] }
  }),
);

export const getFirms = (state: State) => state.firms;
