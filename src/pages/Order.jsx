import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Cards from "../components/Cards";

function Order() {
  const products = useSelector(store => store.products.products);
  const location = useLocation();
  return (
    <div>
      <Cards products={products} />
      <Link state={{ backgroundLocation: location }} to="order-list">
        Order list
      </Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Order;
