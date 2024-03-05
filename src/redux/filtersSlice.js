import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
