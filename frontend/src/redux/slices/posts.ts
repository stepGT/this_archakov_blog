import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'loading',
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const postReducer = postSlice.reducer;
