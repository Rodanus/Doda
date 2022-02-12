import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0
};

const totalOrderPrice = createSlice({
  name: "totalOrderPrice",
  initialState,
  reducers: {
    increasePriceBy(state, action) {
      const priceAmountToIncrease = action.payload;
      state.totalPrice += priceAmountToIncrease;
    },
    decreasePriceBy(state, action) {
      const priceAmountToDecrease = action.payload;
      state.totalPrice -= priceAmountToDecrease;
    },
    clearTotalPrice(state) {
      state.totalPrice = 0;
    }
  }
});

export const { increasePriceBy, decreasePriceBy, clearTotalPrice } =
  totalOrderPrice.actions;

export default totalOrderPrice.reducer;
