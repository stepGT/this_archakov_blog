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
  fullName?: string;
  email: string;
  password: string;
};
