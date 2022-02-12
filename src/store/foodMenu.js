import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodMenu: [
    {
      categoryName: "food",
      items: [
        {
          category: "food",
          name: "Falafel",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        }
      ]
    }
  ]
};

const foodMenu = createSlice({
  name: "foodMenu",
  initialState,
  reducers: {
    increaseOrderQuantityBy(state, action) {
      const { foodCategory, foodName, quantityToIncrease } = action.payload;
      state.foodMenu.forEach((category, foodMenuIndex, foodMenuArr) => {
        if (category.categoryName === foodCategory) {
          category.items.forEach((item, itemIndex) => {
            if (foodName === item.name) {
              state.foodMenu[foodMenuIndex].items[itemIndex].orderedQuantity +=
                quantityToIncrease;
            }
          });
        }
      });
    },
    decreaseQuantity(state, action) {
      const { foodCategory, foodName } = action.payload;
      state.foodMenu.forEach((category, foodMenuIndex, foodMenuArr) => {
        if (category.categoryName === foodCategory) {
          category.items.forEach((item, itemIndex) => {
            if (foodName === item.name) {
              state.foodMenu[foodMenuIndex].items[
                itemIndex
              ].orderedQuantity -= 1;
            }
          });
        }
      });
    },
    toggleIsOrdered(state, action) {
      const { foodCategory, foodName, isOrdered } = action.payload;

      state.foodMenu.forEach((category, foodMenuIndex) => {
        if (category.categoryName === foodCategory) {
          category.items.forEach((item, itemIndex) => {
            if (foodName === item.name) {
              state.foodMenu[foodMenuIndex].items[itemIndex].isOrdered =
                isOrdered;
            }
          });
        }
      });
    },
    labelAllAsUnordered(state) {
      state.foodMenu.forEach((category, foodMenuIndex) => {
        category.items.forEach((item, itemIndex) => {
          state.foodMenu[foodMenuIndex].items[itemIndex].isOrdered = false;
        });
      });
    }
  }
});

export const {
  increaseOrderQuantityBy,
  decreaseQuantity,
  toggleIsOrdered,
  labelAllAsUnordered
} = foodMenu.actions;

export default foodMenu.reducer;
