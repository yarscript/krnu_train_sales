export interface Credentials
{
  username: string;
  password: string;
}

export interface UserState
{
  user_uuid: string
  first_name: string
  last_name: string
  email: string
  email_verified_at: string
  service_plan_uuid: string | null
  service_plan_status: number | null,
  remember_token: string | null
  created_at: string | null
  updated_at: string | null
  deleted_at: string | null
}

export const user: UserState = {
  user_uuid: '',
  first_name: '',
  last_name: '',
  email: '',
  email_verified_at: '',
  service_plan_uuid: '',
  service_plan_status: null,
  remember_token: '',
  created_at: '',
  updated_at: '',
  deleted_at: '',
}
