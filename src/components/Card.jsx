import React from "react";
import tw, { styled, css } from "twin.macro";
import { Link } from "react-router-dom";

const CardContainer = styled.div(() => [
  tw`max-w-full bg-white rounded-3xl flex p-8`,
  css`
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.41);
  `
]);

const CardImage = styled.img(() => [tw`max-w-full w-[200px] self-center mr-8`]);

const ItemTitleAndDesc = styled.div(() => [tw`self-center`]);

const CardTitle = styled.h2(() => [tw`text-2xl mb-4`]);

const CardDesc = styled.p(() => [tw``]);

const ItemAndViewButtonContainer = styled.div(() => [
  tw`flex flex-col justify-between`
]);

const ItemPrice = styled.p(() => [tw`self-end font-bold`]);

const ViewButton = styled(Link)(() => [
  tw`self-end bg-[#0097E0] text-white py-2 px-5 rounded-xl`
]);

function Card({ item }) {
  return (
    <CardContainer>
      <CardImage src={item.image} alt="" />
      <ItemTitleAndDesc>
        <CardTitle>{item.title}</CardTitle>
        <CardDesc>{item.description}</CardDesc>
      </ItemTitleAndDesc>
      <ItemAndViewButtonContainer>
        <ItemPrice>${+item.price.toFixed(2)}</ItemPrice>
        <ViewButton to={`${item.id}`}>view</ViewButton>
      </ItemAndViewButtonContainer>
    </CardContainer>
  );
}

export default Card;
