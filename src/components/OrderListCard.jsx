import React from "react";
import { useDispatch } from "react-redux";
import { toggleIsOrdered } from "../store/foodMenu";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromOrderList
} from "../store/orderList";
import { decreasePriceBy, increasePriceBy } from "../store/totalOrderPrice";

function OrderListCard({ item }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (foodName, foodPrice) => {
    dispatch(increaseQuantity(foodName));
    dispatch(increasePriceBy(foodPrice));
  };

  const handleDecreaseQuantity = (foodName, foodPrice) => {
    dispatch(decreaseQuantity(foodName));
    dispatch(decreasePriceBy(foodPrice));
  };

  const handleRemovingItemFromOrderList = (
    foodCategory,
    foodName,
    quantity,
    price
  ) => {
    dispatch(toggleIsOrdered({ foodCategory, foodName, isOrdered: false }));
    dispatch(removeItemFromOrderList(foodName));
    dispatch(decreasePriceBy(quantity * price));
  };

  const totalItemPrice = (price, quantity) => `$${price * quantity}`;

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.orderedQuantity}</p>
      <p>{totalItemPrice(item.price, item.orderedQuantity)}</p>
      <button onClick={() => handleIncreaseQuantity(item.name, item.price)}>
        Increase
      </button>
      <button onClick={() => handleDecreaseQuantity(item.name, item.price)}>
        decrease
      </button>
      <button
        onClick={() =>
          handleRemovingItemFromOrderList(
            item.category,
            item.name,
            item.orderedQuantity,
            item.price
          )
        }
      >
        remove
      </button>
    </div>
  );
}

export default OrderListCard;
