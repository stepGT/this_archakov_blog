export enum EStatusAuth {
  PENDING   = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED  = 'rejected',
}

export interface IAuthSlice {
  data: [];
  status: string;
}

export type TLogin = {
  email: string;
  password: string;
};
