import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";
import TransitionLink from "gatsby-plugin-transition-link";

const Container = styled(Flex)`
  grid-gap: ${(props) => props.theme.fontSizes[props.gap]};
`;

const Link = styled(TransitionLink)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.dark[400]};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-family: ${(props) => props.theme.fonts.menu};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -4px;
    left: 0;
    transition: width 0.2s ease-in-out;
    background-color: ${(props) =>
      props.theme.colors.primary[400]
        ? props.theme.colors.primary[400]
        : "red"};
  }
  &.active,
  &:hover {
    color: ${(props) =>
      props.theme.colors.dark[100] ? props.theme.colors.dark[100] : "black"};
    &::after {
      width: 20px;
    }
  }
`;

const NavLinks = ({ gap = 6, mb=0}) => {
  return (
    <Container flexDirection="row" gap={gap} mb={mb}>
      {menu.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          activeClassName="active"
          partiallyActive={item.text === "Home" ? false : true}
        >
          {item.text}
        </Link>
      ))}
    </Container>
  );
};

export default NavLinks;

const menu = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Sobre",
    path: "/sobre",
  },
  {
    text: "Portfolio",
    path: "/portifolio",
  },
  {
    text: "Contato",
    path: "/contato",
  },
];
