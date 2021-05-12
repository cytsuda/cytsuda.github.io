import React from "react";
import { Flex } from "rebass";

import styled from "styled-components";


const Main = styled(Flex)`
  background-color: ${(props) => props.theme.colors.backgroundComp};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const Container = styled(Flex)``;

const Footer = ({ fixed = false }) => {
  return (
    <Main py={3} fixed={fixed}>
      <Container>
        <p>Footer</p>
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
