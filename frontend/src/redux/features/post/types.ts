export enum EStatusPost {
  PENDING   = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED  = 'rejected',
}

export type TUser = {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface IPost {
  _id: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
  user: TUser;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IPostSlice {
  items: IPost[];
  status: string;
}
