import React from "react";
import OrderListCard from "./OrderListCard";

function OrderListCards({ itemsOrdered }) {
  return (
    <div className="w-full">
      {itemsOrdered.map(item => (
        <OrderListCard item={item} key={item.title} />
      ))}
    </div>
  );
}

export default OrderListCards;
