import React from "react";
import { Link } from "react-router-dom";
import tw, { styled, css } from "twin.macro";
import HomepageBg from "../images/homepage-bg.jpg";

const HomepageContainer = styled.div(() => [
  tw`h-screen w-screen flex flex-col justify-center`,
  css`
    background: url(${HomepageBg}) no-repeat;
    background-position: center;
    background-size: cover;
  `
]);

const CTAContainer = styled.div(() => [tw`container`]);

const Overlay = styled.div(() => [
  tw`w-screen h-screen bg-black opacity-50 absolute`
]);

const HomepageTitle = styled.h1(() => [
  tw`text-[64px] text-white relative z-10 mb-4`
]);

const CTAContainer = styled.div(() => [tw``]);

const OrderButton = styled(Link)(() => [
  tw`relative z-10 bg-[#14131C] text-[#F3F3F3] text-[32px] capitalize rounded-full py-4 px-8 inline-block hover:bg-[#1A182D]`
]);

function Home() {
  return (
    <HomepageContainer>
      <Overlay />
      <CTAContainer>
        <HomepageTitle>D-Restaurant. Well, a Mini one...</HomepageTitle>
        <OrderButton to="order">order now!</OrderButton>
      </CTAContainer>
    </HomepageContainer>
  );
}

export default Home;
