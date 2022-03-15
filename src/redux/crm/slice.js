import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingIndicator: false,
  tableRowModal: false,
  editLeadModal: false,
  deleteLeadModal: false,
  leads: [],
  cancelled: [],
  sold: [],
  deleted: [],
  user: null,
  singleLeadData: null,
  singleLeadKey: null,
  manualLeadfetch: false,
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
      state.user = action.payload;
    },
    setLoadingIndicator: (state, action) => {
      state.loadingIndicator = action.payload;
    },
    setSingleLeadData: (state, action) => {
      state.singleLeadData = action.payload;
    },
    setSingleLeadKey: (state, action) => {
      state.singleLeadKey = action.payload;
    },
    setTableRowModal: (state, action) => {
      state.tableRowModal = action.payload;
    },
    setEditLeadModal: (state, action) => {
      state.editLeadModal = action.payload;
    },
    setDeleteLeadModal: (state, action) => {
      state.deleteLeadModal = action.payload;
    },
    setManualLeadfetch: (state, action) => {
      state.manualLeadfetch = action.payload;
    },
  },
});

export const {
  setLeads,
  setCencelled,
  setSold,
  setDeleted,
  setUser,
  setLoadingIndicator,
  setSingleLeadData,
  setSingleLeadKey,
  setTableRowModal,
  setEditLeadModal,
  setDeleteLeadModal,
  setManualLeadfetch,
} = crmSlice.actions;
export default crmSlice.reducer;
