import { configureStore } from "@reduxjs/toolkit";
import crmReducer from "./crm/slice";

export const store = configureStore({
  reducer: {
    crm: crmReducer,
  },
});
