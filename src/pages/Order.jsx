import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

function Order() {
  const foodMenu = useSelector(store => store.foodMenu.foodMenu);
  return (
    <div>
      <Cards foodMenu={foodMenu} />
      <Link to="/order-list">Order list</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Order;
