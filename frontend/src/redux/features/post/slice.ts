import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../services/axios';
import { EStatusPost, IPostSlice } from './types';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id: number) =>
  axios.delete(`/posts/${id}`),
);

const initialState: IPostSlice = {
  items: [],
  status: '',
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state: IPostSlice) => {
      state.status = EStatusPost.PENDING;
      state.items = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state: IPostSlice, action) => {
      state.status = EStatusPost.FULFILLED;
      state.items = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = EStatusPost.REJECTED;
      state.items = [];
    });
    //
    builder.addCase(fetchRemovePost.fulfilled, (state: IPostSlice, action) => {
      state.items = state.items.filter(obj => obj._id !== String(action.meta.arg));
    });
  },
});

export const postReducer = postSlice.reducer;
