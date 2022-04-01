import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearOrderList } from "../store/orderList";
import OrderListCards from "./OrderListCards";
import { clearTotalPrice } from "../store/totalOrderPrice";

function OrderList() {
  const { itemsOrdered } = useSelector(state => state.orderList);
  const totalPrice = useSelector(state => state.totalOrderPrice.totalPrice);

  const dispatch = useDispatch();

  const handleClearingOrderList = () => {
    dispatch(clearOrderList());
    dispatch(clearTotalPrice());
  };

  return (
    <div>
      <OrderListCards itemsOrdered={itemsOrdered} />
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => handleClearingOrderList()}>clear</button>
      <Link to="/shop">Shop page</Link>
    </div>
  );
}

export default OrderList;
