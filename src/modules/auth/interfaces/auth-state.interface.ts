export interface AuthState
{
  token: string;
  expires: number;
  token_type: string;
}

export const auth: AuthState = {
  token: '',
  expires: 0,
  token_type: ''
}
