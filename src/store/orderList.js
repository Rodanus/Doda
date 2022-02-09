import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsOrdered: [
    {
      category: "food",
      name: "Falafel",
      price: 10,
      orderedQuantity: 0
    }
  ]
};

const orderList = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    increaseQuantityBy(state, action) {
      const { foodName, quantityToIncrease } = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (foodName === item.name) {
          state.itemsOrdered[itemIndex].orderedQuantity += quantityToIncrease;
        }
      });
    },
    decreaseQuantity(state, action) {
      const foodName = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (foodName === item.name) {
          state.itemsOrdered[itemIndex].orderedQuantity -= 1;
        }
      });
    },
    removeItemFromOrderList(state, action) {
      const foodName = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (foodName === item.name) {
          state.itemsOrdered.splice(itemIndex, 1);
        }
      });
    },
    clearOrderList(state) {
      state.itemsOrdered = [];
    }
  }
});

export const {
  increaseQuantityBy,
  decreaseQuantity,
  removeItemFromOrderList,
  clearOrderList
} = orderList.actions;

export default orderList.reducer;
