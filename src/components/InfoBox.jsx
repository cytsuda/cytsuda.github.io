import React from "react";

import styled from "styled-components";
import { Flex } from "rebass";

const Container = styled(Flex)`
  width: 100%;
  padding: ${(props) => props.theme.space[3]}px;
  grid-gap: ${(props) => props.theme.space[3]}px;
  border-radius: ${(props) => props.theme.space[1]}px;
  background-color: ${(props) => props.theme.colors.backgroundInt};
`;

const Icon = styled(Flex)`
  padding: ${(props) => props.theme.space[3]}px;
  color: ${(props) => props.theme.colors.primary[500]};
  background-color: ${(props) => props.theme.colors.dark[500]};
  border-radius: ${(props) => props.theme.space[1]}px;
  font-size: ${(props) => props.theme.fontSizes[5]};
`;

const Info = styled(Flex)`
  grid-gap: ${(props) => props.theme.space[1]}px;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.dark[400]};
  font-weight: 600;
`;
const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${props=>props.theme.fonts.text};
  line-heigth: auto;
`;

// icon => precisa ser um componente <Icon/>
const InfoBox = (props) => {
  const { children, title, icon } = props;
  return (
    <Container alignItems="center">
      <Icon justifyContent="center" alignItems="center">
        {icon}
      </Icon>
      <Info flexDirection="column">
        <Title>{title}</Title>
        <Text>{children}</Text>
      </Info>
    </Container>
  );
};

export default InfoBox;
