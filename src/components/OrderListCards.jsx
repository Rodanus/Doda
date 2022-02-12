import React from "react";
import OrderListCard from "./OrderListCard";

function OrderListCards({ itemsOrdered }) {
  return (
    <div>
      {itemsOrdered.map(item => (
        <OrderListCard item={item} />
      ))}
    </div>
  );
}

export default OrderListCards;
