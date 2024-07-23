import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './noteSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
