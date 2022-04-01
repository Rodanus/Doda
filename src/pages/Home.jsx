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
  tw`max-w-[740px] text-[60px] text-white font-bold relative z-10 mb-4`
]);

const HomepageTitleCTAWord = styled.span(() => [tw`font-black text-[#0097E0]`]);

const OrderButton = styled(Link)(() => [
  tw`relative z-10 bg-[#0097E0] text-[#F3F3F3] text-[20px] font-bold capitalize rounded-full py-4 px-8 inline-block hover:bg-[#007EBB]`
]);

function Home() {
  return (
    <HomepageContainer>
      <Overlay />
      <CTAContainer>
        <HomepageTitle>
          Shopping from the comfort of your{" "}
          <HomepageTitleCTAWord>bed</HomepageTitleCTAWord>.
        </HomepageTitle>
        <OrderButton to="order">start shopping</OrderButton>
      </CTAContainer>
    </HomepageContainer>
  );
}

export default Home;
