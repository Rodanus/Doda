import React, { useState } from "react";
import { increaseQuantityBy, addItemToOrderList } from "../store/orderList";
import { increasePriceBy } from "../store/totalOrderPrice";
import { useDispatch, useSelector } from "react-redux";

function Card({ item }) {
  const [orderAmount, setOrderAmount] = useState(0);

  const { itemsOrdered } = useSelector(state => state.orderList);

  const dispatch = useDispatch();

  const handleIncreaseOrderQuantity = () => {
    setOrderAmount(preState => preState + 1);
  };

  const handleDecreaseOrderQuantity = () => {
    if (orderAmount > 0) {
      setOrderAmount(preState => preState - 1);
    }
  };

  const isProductOrdered = productId => {
    const orderedProduct = itemsOrdered.filter(
      product => product.id === productId
    );

    return orderedProduct.length > 0;
  };

  const handleItemOrdering = (
    productName,
    productCategory,
    productId,
    quantityToIncrease,
    productPrice
  ) => {
    const isProductOrderedBefore = isProductOrdered(productId);

    if (isProductOrderedBefore && quantityToIncrease > 0) {
      dispatch(increaseQuantityBy({ productId, quantityToIncrease }));
    } else if (quantityToIncrease > 0) {
      dispatch(
        addItemToOrderList({
          id: productId,
          category: productCategory,
          title: productName,
          price: productPrice,
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
        <p>{item.title}</p>
        <p>${+item.price.toFixed(2)}</p>
        <p>{orderAmount}</p>
        <button onClick={() => handleDecreaseOrderQuantity()}>Decrease</button>

        <button onClick={() => handleIncreaseOrderQuantity()}>Increase</button>

        <button
          onClick={() =>
            handleItemOrdering(
              item.title,
              item.category,
              item.id,
              orderAmount,
              item.price
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
