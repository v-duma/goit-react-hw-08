import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isContactModalOpen: false,
  selectedContactId: null,
};

const contactModalSlice = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    openContactModal(state, action) {
      state.isContactModalOpen = true;
      state.selectedContactId = action.payload.contactId;
    },
    closeContactModal(state) {
      state.isContactModalOpen = false;
      state.selectedContactId = null;
    },
  },
});

export const { openContactModal, closeContactModal } = contactModalSlice.actions;

export const modalReducer = contactModalSlice.reducer;
