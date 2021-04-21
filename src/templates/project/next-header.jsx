import React from "react";
import { Box, Text } from "rebass";
import styled from "styled-components";

const Rule = styled.hr`
  background: ${(props) => props.theme.colors.white};
  height: 1px;
  border: 0;
`;

const Heading = styled(Text)`
  color: ${props => props.theme.colors.red};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: normal;
`

const NextProjectHeading = () => (
  <Box mb={5}>
    <Rule />
    <Heading pt={3}>Next Project</Heading>
  </Box>
);

export default NextProjectHeading;
