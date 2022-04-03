import React from "react";
import Card from "./Card";
import tw, { styled } from "twin.macro";

const CardsContainer = styled.div(() => tw`grid grid-cols-2 gap-12`);

function Cards({ products }) {
  return (
    <CardsContainer>
      {products.map(item => (
        <Card item={item} key={item.title} />
      ))}
    </CardsContainer>
  );
}

export default Cards;
