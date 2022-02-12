import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Cards from "../components/Cards";

function Order() {
  const foodMenu = useSelector(store => store.foodMenu.foodMenu);
  const location = useLocation();
  return (
    <div>
      <Cards foodMenu={foodMenu} />
      <Link state={{ backgroundLocation: location }} to="order-list">
        Order list
      </Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Order;
