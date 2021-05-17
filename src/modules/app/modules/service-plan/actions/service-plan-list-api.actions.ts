import { createAction, props } from '@ngrx/store';

import { ServicePlan } from '@/modules/app/modules/service-plan/interfaces/service-plan.interface'


export const loadServicePlanListSuccess = createAction(
  '[ServicePlanList/API] Load Service Plan List Success', props<{ servicePlanList: ServicePlan[] }>()
);

export const loadServicePlanListFailure = createAction(
  '[ServicePlanList/API] Load Service Plan List Failure', props<{ errorMsg: string }>()
);
