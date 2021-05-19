import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { ImBehance } from "@react-icons/all-files/im/ImBehance";
import { ImGithub } from "@react-icons/all-files/im/ImGithub";
import { ImLinkedin2 } from "@react-icons/all-files/im/ImLinkedin2";
import { FiDribbble } from "@react-icons/all-files/fi/FiDribbble";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";

const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.dark[100]};
  grid-gap: ${(props) => props.theme.space[3]}px;
  padding: ${(props) => props.theme.space[1]}px 0;
  ${props => props.circle && css`
    @media only screen and (max-width: ${(props) =>
        props.theme.breakpoints.xxs}) {
      grid-gap: ${(props) => props.theme.space[2]}px;
    }
  `}
`;

const IconWrapper = styled.a`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark[100]};
  &:hover {
    color: ${(props) => props.theme.colors.primary[100]};
  }
  ${(props) =>
    props.circle &&
    css`
      display: flex;
      height: ${(props) => props.theme.space[4] + 8}px;
      width: ${(props) => props.theme.space[4] + 8}px;
      font-size: ${(props) => props.theme.fontSizes[4]};
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => rgba(props.theme.colors.dark[100], 0.01)};
      &:hover {
        background-color: ${(props) => props.theme.colors.dark[600]};
        box-shadow: 0 0 10px ${(props) => props.theme.colors.dark[900]};
      }
      &:active {
        background-color: ${(props) => props.theme.colors.dark[700]};
        box-shadow: inset 0 0 5px ${(props) => props.theme.colors.dark[900]};
      }
    `}
`;

const SocialMedia = ({ circle = 0 }) => {
  return (
    <Container circle={circle}>
      <IconWrapper circle={circle} target="_blank" href="/">
        <ImBehance />
      </IconWrapper>
      <IconWrapper circle={circle} target="_blank" href="/">
        <ImGithub />
      </IconWrapper>
      <IconWrapper circle={circle} target="_blank" href="/">
        <FiDribbble />
      </IconWrapper>
      <IconWrapper circle={circle} target="_blank" href="/">
        <ImLinkedin2 />
      </IconWrapper>
      <IconWrapper circle={circle} target="_blank" href="/">
        <GrInstagram />
      </IconWrapper>
    </Container>
  );
};

export default SocialMedia;
