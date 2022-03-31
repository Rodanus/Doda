import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsOrdered: []
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
      const { productId, quantityToIncrease } = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (productId === item.id) {
          state.itemsOrdered[itemIndex].orderedQuantity += quantityToIncrease;
        }
      });
    },
    increaseQuantity(state, action) {
      const productId = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (productId === item.id) {
          state.itemsOrdered[itemIndex].orderedQuantity += 1;
        }
      });
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (productId === item.id && item.orderedQuantity > 0) {
          state.itemsOrdered[itemIndex].orderedQuantity -= 1;
        }
      });
    },
    removeItemFromOrderList(state, action) {
      const productId = action.payload;

      state.itemsOrdered.forEach((item, itemIndex) => {
        if (productId === item.id) {
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
