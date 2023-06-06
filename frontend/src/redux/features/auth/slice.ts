import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../services/axios';
import { EStatusAuth, IAuthSlice, TLogin } from './types';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params: TLogin) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return data;
});

const initialState: IAuthSlice = {
  data: null,
  status: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = EStatusAuth.PENDING;
      state.data = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = EStatusAuth.FULFILLED;
      state.data = action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = EStatusAuth.REJECTED;
      state.data = null;
    });
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = EStatusAuth.PENDING;
      state.data = null;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = EStatusAuth.FULFILLED;
      state.data = action.payload;
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.status = EStatusAuth.REJECTED;
      state.data = null;
    });
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
