import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Helmet } from "react-helmet";

import Layout from "@layout/main";
import SocialMedia from "@components/SocialMedia";
import NavLinks from "@components/NavLinks";
import Diamonds from "@images/diamonds.svg";
import LogoSvg from "@images/logo_alt.svg";

const bg = 900;

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 100%;
  height: 80vh;
  background-color: ${(props) => props.theme.colors.dark[bg]};
  padding: ${(props) => props.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  border-radius: ${(props) => props.theme.space[1]}px;
  overflow: hidden;
  box-shadow: 1rem 1rem 2rem
    ${(props) => rgba(props.theme.colors.dark[800], 0.2)};

  transition: opacity 0.2s linear;

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: 2;
    width: 10%;
    height: 100%;
    background: url(${Diamonds});
    background-color: ${(props) => props.theme.colors.dark[bg]};
  }
  &:after {
    top: 0;
    left: 0;
    border-right: 2px solid ${(props) => props.theme.colors.dark[800]};
  }
  &:before {
    top: 0;
    right: 0;
    border-left: 2px solid ${(props) => props.theme.colors.dark[800]};
  }

  ${(props) =>
    props.state === "entering" &&
    css`
      opacity: 0;
    `}
  ${(props) =>
    props.state === "entered" &&
    css`
      opacity: 1;
    `}
  ${(props) =>
    props.state === "exiting" &&
    css`
      opacity: 0;
    `}
  ${(props) =>
    props.state === "exited" &&
    css`
      opacity: 0;
    `}
  
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    min-height: 100vh;
    height: auto;
    overflow: auto;
    padding: ${(props) => props.theme.space[3]}px;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-family: ${(props) => props.theme.fonts.text};
  margin-bottom: ${(props) => props.theme.space[3]}px;
  color: ${(props) => props.theme.colors.dark[400]};
  font-weight: 200;
  text-transform: uppercase;
  max-width: 80%;
  text-align: center;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: ${(props) => props.theme.fontSizes[7]};
  }
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes[5]};
  font-family: ${(props) => props.theme.fonts.text};
  margin-bottom: ${(props) => props.theme.space[5]}px;
  font-weight: 200;
  color: ${(props) => props.theme.colors.dark[600]};
  max-width: 80%;
  text-align: center;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    max-width: 75%;
    font-size: ${(props) => props.theme.fontSizes[3]};
  }
`;

const Logo = styled.img`
  width: 15%;
  margin-bottom: ${(props) => props.theme.space[4]}px;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 25%;
  }
`;

const Home = ({ transitionStatus }) => {
  return (
    <Layout type="home" transitionStatus={transitionStatus}>
      <Helmet>
        <title>Yoshio Tsuda</title>
      </Helmet>
      <Container>
        <Logo src={LogoSvg} alt="Logo" />
        <Title>Yoshio Tsuda</Title>
        <Subtitle>Desenvolvedor Front-end / Desenvolvedor Javascript</Subtitle>
        <NavLinks gap={6} mb={4} />
        <SocialMedia circle />
      </Container>
    </Layout>
  );
};

export default Home;
