import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromOrderList,
  clearOrderList
} from "../store/orderList";

function OrderList() {
  const { itemsOrdered } = useSelector(state => state.orderList);
  const dispatch = useDispatch();

  return (
    <div>
      {itemsOrdered.map(item => (
        <div>
          <p>{item.category}</p>
          <p>{item.orderedQuantity}</p>
          <button onClick={() => dispatch(increaseQuantity(item.name))}>
            Increase
          </button>
          <button onClick={() => dispatch(decreaseQuantity(item.name))}>
            decrease
          </button>
          <button onClick={() => dispatch(removeItemFromOrderList(item.name))}>
            remove
          </button>
        </div>
      ))}
      <button onClick={() => dispatch(clearOrderList())}>clear</button>
    </div>
  );
}

export default OrderList;
