import { createReducer, on } from '@ngrx/store';

import {
  ServicePlanListPageActions, ServicePlanListApiActions
} from '@/modules/app/modules/service-plan/actions'
import {
  ServicePlan,
} from "@/modules/app/modules/service-plan/interfaces/service-plan.interface";


export const servicePlanListFeatureKey = 'servicePlanList';

export interface State
{
  servicePlanList: ServicePlan[],
  loading: boolean,
  loaded: boolean,
  error: string,
}

export const initialState: State = {
  servicePlanList: [],
  loaded: false,
  loading: false,
  error: '',
};

export const reducer = createReducer(
  initialState,

  on(ServicePlanListPageActions.init, (state ) => {
    return { ...state, loading: true };
  }),

  on(ServicePlanListApiActions.loadServicePlanListSuccess, (state, { servicePlanList }) => {
    return { ...state, servicePlanList };
  }),

  on(ServicePlanListApiActions.loadServicePlanListFailure, (state, { errorMsg }) => {
    return { ...state, error: errorMsg };
  })
);

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;

export const getServicePlanList = (state: State) => state.servicePlanList;

export const getError = (state: State) => state.error;
