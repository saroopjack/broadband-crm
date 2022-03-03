import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leads: [],
  cancelled: [],
  sold: [],
  deleted: [],
};

export const crmSlice = createSlice({
  name: "crm",
  initialState,
  reducers: {
    setLeads: (state, action) => {
      state.leads = action.payload;
    },
    setCencelled: (state, action) => {
      state.cancelled = action.payload;
    },
    setSold: (state, action) => {
      state.sold = action.payload;
    },
    setDeleted: (state, action) => {
      state.deleted = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.type;
    },
  },
});

export const { setLeads, setCencelled, setSold, setDeleted, setUser } =
  crmSlice.actions;
export default crmSlice.reducer;
