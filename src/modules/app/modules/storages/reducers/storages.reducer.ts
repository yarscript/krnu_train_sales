import { createReducer, on } from '@ngrx/store';

import {
  StorageApiActions, StorageCreatePageActions
}                                            from '@/modules/app/modules/storages/actions'
import { Storage } from "@/modules/app/modules/storages/interfaces/storage-state.interface";


export const StorageFeatureKey = 'storage';

export interface State
{
  // user: User | null;
  storages: Storage[]
}

export const initialState: State = {
  storages: []
};

export const reducer = createReducer(
  initialState,
  on(StorageApiActions.initSuccess, (state, { storages }) => {
    return { ...state, storages }
  }),
  on(StorageApiActions.createSuccess, (state, { storage }) => {
    return { ...state, storages: [ storage ] }
  }),
);

export const getStorages = (state: State) => state.storages;
