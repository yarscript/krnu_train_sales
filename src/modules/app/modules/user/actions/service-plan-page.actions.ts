import { createAction, props } from '@ngrx/store';
import { ServicePlan }         from "@/modules/app/modules/service-plan/interfaces/service-plan.interface";


export const selectServicePlan = createAction(
  '[ServicePlan Page] Select Service plan', props<{ selectedServicePlan: ServicePlan }>()
);
