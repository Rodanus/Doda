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
    }
  }
});

export const { increasePriceBy, decreasePriceBy } = totalOrderPrice.actions;

export default totalOrderPrice.reducer;
