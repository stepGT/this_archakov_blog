import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from '../redux/slices/posts';

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
