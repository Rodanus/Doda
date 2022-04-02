import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import tw, { styled } from "twin.macro";

const ShopContainer = styled.main(() => [tw`container`]);

function Shop() {
  const products = useSelector(store => store.products.products);
  return (
    <ShopContainer>
      <Cards products={products} />
    </ShopContainer>
  );
}

export default Shop;
