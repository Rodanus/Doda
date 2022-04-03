import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearOrderList } from "../store/orderList";
import OrderListCards from "../components/OrderListCards";
import { clearTotalPrice } from "../store/totalOrderPrice";
import CartForm from "../components/CartForm";

function OrderList() {
  const { itemsOrdered } = useSelector(state => state.orderList);
  const totalPrice = useSelector(state => state.totalOrderPrice.totalPrice);

  const dispatch = useDispatch();

  const handleClearingOrderList = () => {
    dispatch(clearOrderList());
    dispatch(clearTotalPrice());
  };

  return (
    <main className="container">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-5xl">Your Order: </h1>
        <p className="text-3xl">Total Price: ${totalPrice}</p>
      </div>
      <div className="flex justify-between items-center">
        <CartForm className="w-1/2" clearOrderList={handleClearingOrderList} />
        <div className="w-1/2 flex flex-col">
          <button
            className="self-end bg-[#E73D3E] text-[#F3F3F3] hover:bg-[#C1393A] p-2 mb-8 rounded-[14px]"
            onClick={() => handleClearingOrderList()}
          >
            clear cart
          </button>
          <OrderListCards itemsOrdered={itemsOrdered} />
        </div>
      </div>
    </main>
  );
}

export default OrderList;
