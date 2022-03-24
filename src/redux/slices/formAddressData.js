import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "india",
  streetAddress: "",
  city: "",
  state: "",
  pinCode: "",
};

export const formAddressSlice = createSlice({
  name: "formAddress",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setStreetAddress: (state, action) => {
      state.streetAddress = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setPinCode: (state, action) => {
      state.pinCode = action.payload;
    },
  },
});

export const { setCountry, setStreetAddress, setState, setCity, setPinCode } =
  formAddressSlice.actions;
export default formAddressSlice.reducer;
