import {
  Action, combineReducers, createFeatureSelector, createSelector,
}                               from '@ngrx/store';
import * as fromRoot            from '@/modules/app/reducers';
import * as fromServicePlanList from './service-plan-list.reducer'


export const servicePlanFeatureKey = 'servicePlan';


export interface ServicePlanState
{
  [fromServicePlanList.servicePlanListFeatureKey]: fromServicePlanList.State;
}

export interface State extends fromRoot.State
{
  [servicePlanFeatureKey]: ServicePlanState
}

export function reducers(state: ServicePlanState | undefined, action: Action) {
  return combineReducers({
    [fromServicePlanList.servicePlanListFeatureKey]: fromServicePlanList.reducer,
  })(state, action);
}

export const selectServicePlanListState = createFeatureSelector<State, ServicePlanState>(
  servicePlanFeatureKey
);

export const selectServicePlanListEntitiesState = createSelector(
  selectServicePlanListState, (state) => state.servicePlanList
);

export const selectServicePlanList = createSelector(
  selectServicePlanListEntitiesState, fromServicePlanList.getServicePlanList
);
