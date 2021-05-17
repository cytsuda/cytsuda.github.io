import React from "react";
import { Flex, Box, Image } from "rebass";
import TransitionLink from "gatsby-plugin-transition-link";
import styled from "styled-components";
import SvgLogo from "@images/logo.svg";
import NavLinks from "@components/NavLinks"

const Main = styled(Box)`
  background-color: ${(props) => props.theme.colors.backgroundComp};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.nav};
  width: 100vw;
`;

const Logo = styled(TransitionLink)`
  text-decoration: none;
`;
const Container = styled(Flex)`
  max-width: ${(props) => props.theme.breakpoints[3]};
`;

const Header = (props) => {
  return (
    <Main pt={3} pb={2}>
      <Container alignItems="center" mx="auto">
        <Box flex="1 1 auto">
          <Logo to="/">
            <Image alt="Logo" src={SvgLogo} height={36} />
          </Logo>
        </Box>
        <NavLinks/>
      </Container>
    </Main>
  );
};

export default Header;
