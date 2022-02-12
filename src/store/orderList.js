import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsOrdered: [
    {
      category: "food",
      name: "Falafel",
      price: 10,
      orderedQuantity: 0
    },
    {
      category: "food",
      name: "toto",
      price: 10,
      orderedQuantity: 1
    }
  ]
};

const orderList = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    addItemToOrderList(state, action) {
      const item = action.payload;
      state.itemsOrdered.push(item);
    },
    increaseQuantityBy(state, action) {
      const { foodName, quantityToIncrease } = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (foodName === item.name) {
          state.itemsOrdered[itemIndex].orderedQuantity += quantityToIncrease;
        }
      });
    },
    increaseQuantity(state, action) {
      const foodName = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (foodName === item.name) {
          state.itemsOrdered[itemIndex].orderedQuantity += 1;
        }
      });
    },
    decreaseQuantity(state, action) {
      const foodName = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (foodName === item.name && item.orderedQuantity > 0) {
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
  addItemToOrderList,
  increaseQuantityBy,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromOrderList,
  clearOrderList
} = orderList.actions;

export default orderList.reducer;
