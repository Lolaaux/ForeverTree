import donationReducer from "./donationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    donate: donationReducer,
  },
});
export default store;
