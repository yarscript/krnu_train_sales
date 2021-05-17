export interface ServicePlan
{
  service_plan_uuid: string,
  name: string,
  plan: string | null,
  created_by: string,
  deleted_by: string | null,
  created_at: string | null,
  updated_at: string | null,
  deleted_at: string | null,
}

export const servicePlan: ServicePlan = {
  service_plan_uuid: '',
  name: '',
  plan: '',
  created_by: '',
  deleted_by: '',
  created_at: '',
  updated_at: '',
  deleted_at: '',
}
