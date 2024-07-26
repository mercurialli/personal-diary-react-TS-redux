import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { INote } from '@src/components/types/types';

const initialState = {
  notes: [
    {
      title: 'title',
      description: 'description',
      id: 'id',
      date: 'date',
    },
    { title: 'title2', description: 'description2', id: 'id2', date: 'date2' },
  ],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      state.notes = [...state.notes, action.payload];
    },
    removeNote(state, action: PayloadAction<INote>) {
      state.notes.filter((item) => item !== action.payload);
    },
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export const isNote = (state: RootState) => state.notes;
export default noteSlice.reducer;
