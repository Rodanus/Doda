import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromOrderList
} from "../store/orderList";
import tw, { styled } from "twin.macro";
import { decreasePriceBy, increasePriceBy } from "../store/totalOrderPrice";
import { ReactComponent as IncreaseIcon } from "../icons/increase-btn.svg";
import { ReactComponent as DecreaseIcon } from "../icons/descrease-btn.svg";
const IncreaseQuantityIcon = styled(IncreaseIcon)(() => [
  tw`cursor-pointer w-[30px] select-none mr-4`
]);
const DecreaseQuantityIcon = styled(DecreaseIcon)(() => [
  tw`cursor-pointer w-[30px] select-none`
]);
function OrderListCard({ item }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (productId, productPrice) => {
    dispatch(increaseQuantity(productId));
    dispatch(increasePriceBy(productPrice));
  };

  const handleDecreaseQuantity = (productId, productPrice, orderedQuantity) => {
    if (orderedQuantity > 1) {
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
    <div className="flex gap-x-8 bg-white p-8 rounded-2xl mb-8">
      <img src={item.image} alt="" className="w-24" />
      <div>
        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
        <span className="font-bold block mb-4">
          {totalItemPrice(item.price, item.orderedQuantity)} for each
        </span>
        <div className="flex items-center gap-x-4">
          <DecreaseQuantityIcon
            onClick={() =>
              handleDecreaseQuantity(item.id, item.price, item.orderedQuantity)
            }
          />
          <span className="text-2xl">{item.orderedQuantity}</span>
          <IncreaseQuantityIcon
            onClick={() => handleIncreaseQuantity(item.id, item.price)}
          />
          <button
            className="bg-[#E73D3E] text-[#F3F3F3] hover:bg-[#C1393A] p-2 rounded-[14px]"
            onClick={() =>
              handleRemovingItemFromOrderList(
                item.id,
                item.orderedQuantity,
                item.price
              )
            }
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderListCard;
