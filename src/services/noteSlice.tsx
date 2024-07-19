import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    addNote(state, action) {
      state.notes.push({
        // id: uniqueId,
        // name: action.payload.,
        // text: action.payload.text,
      });
    },
    removeNote(state, action) {},
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
