import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Cards from "../components/Cards";

function Shop() {
  const products = useSelector(store => store.products.products);
  const location = useLocation();
  return (
    <main>
      <Cards products={products} />
      <Link state={{ backgroundLocation: location }} to="order-list">
        Cart
      </Link>
      <Link to="/">Home</Link>
    </main>
  );
}

export default Shop;
