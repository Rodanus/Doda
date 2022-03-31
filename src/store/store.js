import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import orderListReducer from "./orderList";
import totalOrderPriceReducer from "./totalOrderPrice";

export default configureStore({
  reducer: {
    products: productsReducer,
    orderList: orderListReducer,
    totalOrderPrice: totalOrderPriceReducer
  }
});
