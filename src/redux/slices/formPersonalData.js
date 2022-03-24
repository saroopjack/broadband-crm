import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  emailId: "",
  phoneNum: null,
};

export const formSlice = createSlice({
  name: "formPersonal",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmailId: (state, action) => {
      state.emailId = action.payload;
    },
    setPhoneNum: (state, action) => {
      state.phoneNum = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmailId, setPhoneNum } =
  formSlice.actions;
export default formSlice.reducer;
