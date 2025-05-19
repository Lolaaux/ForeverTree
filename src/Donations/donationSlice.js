import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  donater: null,
  donatingTo: null,
  payment: null,
  donatingAmount: null,
  selected: null,
  checkout: null,
  resetState: null,
  counter: 3,
  userData: [],
};
const donationSlice = createSlice({
  name: "donate",
  initialState,
  reducers: {
    nextStep(state) {
      state.step = state.step + 1;
    },
    backStep(state) {
      state.step = state.step - 1;
    },
    amount(state, action) {
      state.donatingAmount = action.payload;
    },
    donater(state, action) {
      state.donater = action.payload;
    },
    paymentType(state, action) {
      state.payment = action.payload;
    },
    donatingCountry(state, action) {
      state.donatingTo = action.payload;
    },
    selected(state, action) {
      state.selected = action.payload;
    },
    checkout(state, action) {
      state.checkout = action.payload;
    },
    resetCheckout(state) {
      state.step = 1;
      state.checkout = null;
      state.donater = null;
      state.donatingTo = null;
      state.payment = null;
      state.donatingAmount = null;
      state.selected = null;
      state.counter = 3;
    },
    counter(state) {
      if (state.counter > -1) {
        state.counter -= 1;
      }
    },
    userData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const {
  nextStep,
  backStep,
  amount,
  donater,
  paymentType,
  donatingCountry,
  selected,
  checkout,
  resetCheckout,
  counter,
  userData,
} = donationSlice.actions;
export { initialState };
export default donationSlice.reducer;
