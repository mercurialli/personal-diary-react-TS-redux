import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { INote } from '@src/components/types/types';

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
