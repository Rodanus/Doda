import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Cards from "../components/Cards";
import tw, { styled } from "twin.macro";

const ShopContainer = styled.main(() => [tw`container`]);

function Shop() {
  const products = useSelector(store => store.products.products);
  const location = useLocation();
  return (
    <ShopContainer>
      <Cards products={products} />
      <Link state={{ backgroundLocation: location }} to="order-list">
        Cart
      </Link>
      <Link to="/">Home</Link>
    </ShopContainer>
  );
}

export default Shop;
