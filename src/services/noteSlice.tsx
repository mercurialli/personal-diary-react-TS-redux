import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { INote } from '@src/components/types/types';
import { v4 as uniqueId } from 'uuid';

interface IState {
  notes: INote[];
}

const initialState: IState = {
  notes: [],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      action.payload.id = uniqueId();
      state.notes = [...state.notes, action.payload];
    },
    removeNote(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      state.notes = state.notes.filter((note) => note.id !== itemId);
    },
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export const isNote = (state: RootState) => state.notes;
export default noteSlice.reducer;
