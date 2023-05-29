import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './features/post/slice';
import { tagsReducer } from './features/tags/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    tags: tagsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
