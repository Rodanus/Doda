import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromOrderList
} from "../store/orderList";
import { decreasePriceBy, increasePriceBy } from "../store/totalOrderPrice";

function OrderListCard({ item }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (productId, productPrice) => {
    dispatch(increaseQuantity(productId));
    dispatch(increasePriceBy(productPrice));
  };

  const handleDecreaseQuantity = (productId, productPrice, orderedQuantity) => {
    if (orderedQuantity > 0) {
      dispatch(decreaseQuantity(productId));
      dispatch(decreasePriceBy(productPrice));
    }
  };

  const handleRemovingItemFromOrderList = (productId, quantity, price) => {
    dispatch(removeItemFromOrderList(productId));
    dispatch(decreasePriceBy(quantity * price));
  };

  const totalItemPrice = (price, quantity) =>
    `$${+(price * quantity).toFixed(2)}`;

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.orderedQuantity}</p>
      <p>{totalItemPrice(item.price, item.orderedQuantity)}</p>
      <button onClick={() => handleIncreaseQuantity(item.id, item.price)}>
        Increase
      </button>
      <button
        onClick={() =>
          handleDecreaseQuantity(item.id, item.price, item.orderedQuantity)
        }
      >
        decrease
      </button>
      <button
        onClick={() =>
          handleRemovingItemFromOrderList(
            item.category,
            item.id,
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
