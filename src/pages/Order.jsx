import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";

function Order() {
  const foodMenu = useSelector(store => store.foodMenu.foodMenu);
  console.log(foodMenu);
  return (
    <div>
      <Cards foodMenu={foodMenu} />
    </div>
  );
}

export default Order;
