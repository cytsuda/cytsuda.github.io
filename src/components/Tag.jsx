import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-family: ${(props) => props.theme.fonts.menu};
  font-sizes: ${(props) => props.theme.fontSizes[2]};
  background-color: ${(props) => props.theme.colors.dark[500]};
  color: ${(props) => props.theme.colors.dark[200]};
  padding: ${(props) => props.theme.space[2]}px
    ${(props) => props.theme.space[3]}px ${(props) => props.theme.space[1]}px;
  border-radius: 5px;
`;

const TagComponent = (props) => {
  return <Container>{props.children}</Container>;
};

export default TagComponent;