import { configureStore } from "@reduxjs/toolkit";
import crmReducer from "./slices/crm";
import formReducer from "./slices/formPersonalData";
import formAddressReducer from "./slices/formAddressData";
import multiStepReducer from "./slices/multiStep";

export const store = configureStore({
  reducer: {
    crm: crmReducer,
    formPersonal: formReducer,
    multiStep: multiStepReducer,
    formAddress: formAddressReducer,
  },
});
