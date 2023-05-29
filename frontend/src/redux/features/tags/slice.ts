import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../services/axios';
import { EStatusTags, ITagSlice } from './types';

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
  const { data } = await axios.get('/tags');
  return data;
});

const initialState: ITagSlice = {
  items: [],
  status: '',
};

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state: ITagSlice) => {
      state.status = EStatusTags.PENDING;
      state.items = [];
    });
    builder.addCase(fetchTags.fulfilled, (state: ITagSlice, action) => {
      state.status = EStatusTags.FULFILLED;
      state.items = action.payload;
    });
    builder.addCase(fetchTags.rejected, (state) => {
      state.status = EStatusTags.REJECTED;
      state.items = [];
    });
  },
});

export const tagsReducer = tagSlice.reducer;
