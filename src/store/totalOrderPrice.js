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
      state.totalPrice = +(state.totalPrice + priceAmountToIncrease).toFixed(2);
    },
    decreasePriceBy(state, action) {
      const priceAmountToDecrease = action.payload;
      state.totalPrice = +(state.totalPrice - priceAmountToDecrease).toFixed(2);
    },
    clearTotalPrice(state) {
      state.totalPrice = 0;
    }
  }
});

export const { increasePriceBy, decreasePriceBy, clearTotalPrice } =
  totalOrderPrice.actions;

export default totalOrderPrice.reducer;
