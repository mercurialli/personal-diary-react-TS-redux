import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: ['1', '2'],
  },
  reducers: {
    addNote(state, action) {
      state.notes = [...state.notes, '3'];
    },
    removeNote(state, action) {
      state.notes = [];
    },
  },
});
//hgfhfgjhg
export const { addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
