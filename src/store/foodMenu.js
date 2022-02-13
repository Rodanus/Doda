import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodMenu: [
    {
      categoryName: "food",
      items: [
        {
          category: "food",
          img: "https://unsplash.com/photos/rN7GMHp_og4",
          name: "Falafel",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        },
        {
          category: "food",
          img: "https://unsplash.com/photos/JspLKUauwSI",
          name: "Pizza",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        },
        {
          category: "food",
          img: "https://unsplash.com/photos/uVPV_nV17Tw",
          name: "Burger",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        },
        {
          category: "food",
          img: "https://unsplash.com/photos/hw1BHHTgwx8",
          name: "Shawarma",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        }
      ]
    },
    {
      categoryName: "drinks",
      items: [
        {
          category: "drinks",
          img: "https://unsplash.com/photos/xYSp0kkIUio",
          name: "Pepsi",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        },
        {
          category: "drinks",
          img: "https://unsplash.com/photos/qy4vrr2qi3M",
          name: "Coca Cola ",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        },
        {
          category: "drinks",
          img: "https://unsplash.com/photos/DFtvglCPWjY",
          name: "Tea",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        }
      ]
    },
    {
      categoryName: "salads",
      items: [
        {
          category: "salads",
          img: "https://unsplash.com/photos/IGfIGP5ONV0",
          name: "Vegan salad",
          price: 10,
          orderedQuantity: 0,
          isOrdered: false
        },
        {
          category: "salads",
          img: "https://unsplash.com/photos/Lv174o7fn7Y",
          name: "Asparagus Salad",
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
