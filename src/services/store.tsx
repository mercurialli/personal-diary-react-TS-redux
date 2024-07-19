import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './noteSlice';

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
