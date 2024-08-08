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

      // Object.assign(updatedNote, {
      //   title: action.payload.title,
      //   date: action.payload.date,
      //   description: action.payload.description,
      //   id: action.payload.id,
      // });

      // state.notes = [...state.notes];

      // const index = state.notes.findIndex(
      //   (item) => item.id === action.payload.id,
      // );
      // const updatedState = [...state.notes];
      // updatedState[index].title = action.payload.title;
    },
  },
});

export const { addNote, removeNote, editNote } = noteSlice.actions;
export const isNote = (state: RootState) => state.notes;
export default noteSlice.reducer;
