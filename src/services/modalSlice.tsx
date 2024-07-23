import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {
  isOpen: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    isOpenModal(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { isOpenModal } = modalSlice.actions;
export const selectIsOpen = (state: RootState) => state.modal.isOpen;
export default modalSlice.reducer;
