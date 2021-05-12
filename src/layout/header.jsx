import React from "react";
import { Flex, Box, Image } from "rebass";
import TransitionLink from "gatsby-plugin-transition-link";
import styled from "styled-components";
import SvgLogo from "@images/logo.svg";

const Main = styled(Box)`
  background-color: ${(props) => props.theme.colors.backgroundComp};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.nav};
  width: 100vw;
`;

const NavList = styled(Flex)`
  grid-gap: ${(props) => props.theme.fontSizes[6]};
`;
const Logo = styled(TransitionLink)`
  text-decoration: none;
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

const Container = styled(Flex)`
  max-width: ${(props) => props.theme.breakpoints[3]};
`;

const menu = [
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

const Header = (props) => {
  return (
    <Main pt={3} pb={2}>
      <Container alignItems="center" mx="auto">
        <Box flex="1 1 auto">
          <Logo to="/">
            <Image alt="Logo" src={SvgLogo} height={36} />
          </Logo>
        </Box>
        <NavList flexDirection="row">
          {menu.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              activeClassName="active"
              partiallyActive={true}
            >
              {item.text}
            </Link>
          ))}
        </NavList>
      </Container>
    </Main>
  );
};

export default Header;
/*
<Box px={[3, 5]} py={4}>
  <Image src={Logo} alt="Gatsbygram Logo" height={48} />
</Box>
*/
