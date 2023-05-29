export enum EStatusTags {
  PENDING   = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED  = 'rejected',
}

export interface ITagSlice {
  items: [];
  status: string;
}
