import tw, { styled, css } from "twin.macro";
import React from "react";
import { Link } from "react-router-dom";

const Header = styled.header(() => [
  tw`container h-[80px] fixed flex justify-between z-50 left-1/2`,
  css`
    transform: translateX(-50%);
  `
]);
const Navbar = styled.nav(() => [
  tw`m-auto w-full flex justify-between items-center`
]);
const NavLinks = styled.ul(() => [tw`flex justify-between w-1/2`]);
const NavLinkContainer = styled.li(() => []);
const NavLink = styled(Link)(() => [tw`capitalize text-black text-lg`]);

function Nav() {
  const navLinks = [
    {
      title: "home",
      path: "/"
    },
    {
      title: "shop",
      path: "shop"
    },
    {
      title: "about",
      path: "about"
    },
    {
      title: "contact us",
      path: "contact"
    }
  ];

  return (
    <Header>
      <Navbar>
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="137"
            height="62"
            viewBox="0 0 137 62"
          >
            <text
              id="Doda"
              transform="translate(0 50)"
              fill="#0097e0"
              fontSize="53"
              fontFamily="Rockwell-Bold, Rockwell"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                D
              </tspan>
              <tspan y="0" fill="#e73d3e">
                o
              </tspan>
              <tspan y="0" fill="#9ad265">
                d
              </tspan>
              <tspan y="0" fill="#8771d6">
                a
              </tspan>
            </text>
          </svg>
        </NavLink>

        <NavLinks>
          {navLinks.map(linkElement => (
            <NavLinkContainer key={linkElement.title}>
              <NavLink to={linkElement.path}>{linkElement.title}</NavLink>
            </NavLinkContainer>
          ))}
          <NavLinkContainer>
            <NavLink to="/shop/order-list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.354"
                height="25.203"
                viewBox="0 0 28.354 25.203"
              >
                <path
                  id="shopping-cart"
                  d="M26,14.833,28.324,4.594A1.181,1.181,0,0,0,27.172,3.15H7.837L7.386.945A1.181,1.181,0,0,0,6.228,0H1.181A1.181,1.181,0,0,0,0,1.181v.788A1.181,1.181,0,0,0,1.181,3.15h3.44L8.079,20.056a2.757,2.757,0,1,0,3.3.422H21.7a2.756,2.756,0,1,0,3.131-.512l.272-1.195a1.181,1.181,0,0,0-1.152-1.443H10.737l-.322-1.575h14.43A1.181,1.181,0,0,0,26,14.833Z"
                  fill="#000"
                />
              </svg>
            </NavLink>
          </NavLinkContainer>
        </NavLinks>
      </Navbar>
    </Header>
  );
}

export default Nav;
