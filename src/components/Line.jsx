import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

const LineContainer = styled(Flex)`
  grid-gap: ${(props) => props.theme.space[3]}px;
  align-items: center;
`;
const FullLine = styled.hr`
  flex: 1;
  border: none;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.primary[500]};
`;

const LineText = styled.span`
  font-family: ${(props) => props.theme.fonts.text};
  font-weight: 200;
  font-size: ${(props) => props.theme.fontSizes[3]};
  color: ${(props) => props.theme.colors.dark[500]};
  text-transform: uppercase;
`;

const Line = ({
  mt = undefined,
  mb = undefined,
  my = 4,
  right = false,
  left = false,
  children,
}) => {
  let option = { my: my };
  if (typeof mt !== "undefined") {
    option = { ...option, mt: mt };
  }
  if (typeof mb !== "undefined") {
    option = { ...option, mb: mb };
  }

  return (
    <LineContainer {...option}>
      {!right && <FullLine />}
      <LineText>{children}</LineText>
      {!left && <FullLine />}
    </LineContainer>
  );
};

export default Line;
