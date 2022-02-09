import { configureStore } from "@reduxjs/toolkit";
import foodMenuReducer from "./foodMenu";
import orderListReducer from "./orderList";
import totalOrderPriceReducer from "./totalOrderPrice";

export default configureStore({
  reducer: {
    foodMenu: foodMenuReducer,
    orderList: orderListReducer,
    totalOrderPrice: totalOrderPriceReducer
  }
});
