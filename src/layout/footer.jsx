import React from "react";
import { Flex } from "rebass";

import styled, { css } from "styled-components";

const Main = styled(Flex)`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
      z-index: 1;
      position: fixed;
      bottom: 0;
      left: -10%; 
    `}
`;

const Container = styled(Flex)`
  font-family: ${(props) => props.theme.fonts.text};
  width: ${(props) => props.theme.breakpoints.xl};
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary[800]};
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => props.theme.colors.primary[400]};
  }
  &:visted {
    color: ${(props) => props.theme.colors.primary[700]};
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes[0]};
  color: ${(props) => props.theme.colors.dark[400]};
`;

const Footer = ({ fixed = false }) => {
  return (
    <Main pb={3} px={3} fixed={fixed}>
      <Container flexDirection="column" alignItems="flex-end">
        <Text>Tsuda © {new Date().getFullYear()}</Text>
        <Text>
          Criado em{" "}
          <Link href="https://www.gatsbyjs.com/" target="_blank">
            Gatsby
          </Link>
          ,<Link href="https://www.datocms.com/">Dato CMS</Link> &
          <Link href="https://www.netlify.com/">Netlify</Link>
        </Text>
      </Container>
    </Main>
  );
};

export default Footer;
/*
<Box px={[3, 5]} py={4}>
  <Image src={Logo} alt="Gatsbygram Logo" height={48} />
</Box>
*/
