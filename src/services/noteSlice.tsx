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
    editNote(state, action: PayloadAction<INote>) {
      const updatedNote = state.notes.find(
        (item) => item.id === action.payload.id,
      );
      updatedNote.title = action.payload.title;
      updatedNote.date = action.payload.date;
      updatedNote.description = action.payload.description;
      updatedNote.id = action.payload.id;
    },
  },
});

export const { addNote, removeNote, editNote } = noteSlice.actions;
export const isNote = (state: RootState) => state.notes;
export default noteSlice.reducer;
