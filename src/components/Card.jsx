import React, { useState } from "react";
import { increaseOrderQuantityBy } from "../store/foodMenu";
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

  const handleItemOrdering = (foodCategory, foodName, quantityToIncrease) => {
    dispatch(
      increaseOrderQuantityBy({
        foodCategory,
        foodName,
        quantityToIncrease
      })
    );
    setOrderAmount(0);
  };
  return (
    <div>
      <>
        <p>{item.name}</p>
        <p>{orderAmount}</p>
        <button onClick={() => handleDecreaseOrderQuantity()}>Decrease</button>

        <button onClick={() => handleIncreaseOrderQuantity()}>Increase</button>

        <button
          onClick={() =>
            handleItemOrdering(item.category, item.name, orderAmount)
          }
        >
          Order
        </button>
      </>
    </div>
  );
}

export default Card;
