import { createReducer, on } from '@ngrx/store';

import {
  CarriageApiActions, CarriageCreatePageActions
}                                            from '@/modules/app/modules/carriages/actions'
import { Carriage } from "@/modules/app/modules/carriages/interfaces/carriage-state.interface";


export const CarriageFeatureKey = 'carriages';

export interface State
{
  // user: User | null;
  carriages: Carriage[]
}

export const initialState: State = {
  carriages: []
};

export const reducer = createReducer(
  initialState,
  on(CarriageApiActions.initSuccess, (state, { carriages }) => {
    return { ...state, carriages }
  }),
  on(CarriageApiActions.createSuccess, (state, { carriage }) => {
    return { ...state, Firms: [ carriage ] }
  }),
);

export const getCarriages = (state: State) => state.carriages;
