import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromOrderList,
  clearOrderList
} from "../store/orderList";
import { toggleIsOrdered, labelAllAsUnordered } from "../store/foodMenu";

function OrderList() {
  const { itemsOrdered } = useSelector(state => state.orderList);
  const dispatch = useDispatch();

  const handleRemovingItemFromOrderList = (foodCategory, foodName) => {
    dispatch(toggleIsOrdered({ foodCategory, foodName, isOrdered: false }));
    dispatch(removeItemFromOrderList(foodName));
  };

  const handleClearingOrderList = () => {
    dispatch(clearOrderList());
    dispatch(labelAllAsUnordered());
  };

  const totalItemPrice = (price, quantity) => `$${price * quantity}`;

  return (
    <div>
      {itemsOrdered.map(item => (
        <div>
          <p>{item.name}</p>
          <p>{item.orderedQuantity}</p>
          <p>{totalItemPrice(item.price, item.orderedQuantity)}</p>
          <button onClick={() => dispatch(increaseQuantity(item.name))}>
            Increase
          </button>
          <button onClick={() => dispatch(decreaseQuantity(item.name))}>
            decrease
          </button>
          <button
            onClick={() =>
              handleRemovingItemFromOrderList(item.category, item.name)
            }
          >
            remove
          </button>
        </div>
      ))}
      <button onClick={() => handleClearingOrderList()}>clear</button>
      <Link to="/order">Order page</Link>
    </div>
  );
}

export default OrderList;
