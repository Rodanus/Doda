import React, { useState } from "react";
import { increaseOrderQuantityBy, toggleIsOrdered } from "../store/foodMenu";
import { increaseQuantityBy, addItemToOrderList } from "../store/orderList";
import { increasePriceBy } from "../store/totalOrderPrice";
import { useDispatch } from "react-redux";

function Card({ item }) {
  const [orderAmount, setOrderAmount] = useState(0);

  const dispatch = useDispatch();

  const handleIncreaseOrderQuantity = () => {
    setOrderAmount(preState => preState + 1);
  };

  const handleDecreaseOrderQuantity = () => {
    if (orderAmount > 0) {
      setOrderAmount(preState => preState - 1);
    }
  };

  const handleItemOrdering = (
    foodCategory,
    foodName,
    quantityToIncrease,
    foodPrice,
    isOrdered
  ) => {
    if (isOrdered && quantityToIncrease > 0) {
      dispatch(
        increaseOrderQuantityBy({
          foodCategory,
          foodName,
          quantityToIncrease
        })
      );
      dispatch(increaseQuantityBy({ foodName, quantityToIncrease }));
    } else if (quantityToIncrease > 0) {
      dispatch(
        toggleIsOrdered({
          foodCategory,
          foodName,
          isOrdered: orderAmount > 0
        })
      );
      dispatch(
        addItemToOrderList({
          category: foodCategory,
          name: foodName,
          price: foodPrice,
          orderedQuantity: orderAmount
        })
      );
    }
    dispatch(increasePriceBy(item.price * quantityToIncrease));
    setOrderAmount(0);
  };
  return (
    <div>
      <>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>{orderAmount}</p>
        <button onClick={() => handleDecreaseOrderQuantity()}>Decrease</button>

        <button onClick={() => handleIncreaseOrderQuantity()}>Increase</button>

        <button
          onClick={() =>
            handleItemOrdering(
              item.category,
              item.name,
              orderAmount,
              item.price,
              item.isOrdered
            )
          }
        >
          Order
        </button>
      </>
    </div>
  );
}

export default Card;
