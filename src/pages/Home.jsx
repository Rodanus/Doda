import React from "react";
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

const OrderButton = styled(Link)(() => [
  tw`bg-blue-400 capitalize rounded p-4 inline-block hover:bg-blue-500`
]);

function Home() {
  return (
    <div>
      <OrderButton to="order">order now!</OrderButton>
    </div>
  );
}

export default Home;
