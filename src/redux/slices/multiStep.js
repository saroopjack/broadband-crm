import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

export const multiStepSlice = createSlice({
  name: "multiStep",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = multiStepSlice.actions;
export default multiStepSlice.reducer;
