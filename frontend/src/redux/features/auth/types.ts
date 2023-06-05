import { TUser } from '../post/types';

export enum EStatusAuth {
  PENDING   = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED  = 'rejected',
}

export interface IAuthSlice {
  data: TUser | null;
  status: string;
}

export type TLogin = {
  email: string;
  password: string;
};
