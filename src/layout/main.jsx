import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Box } from "rebass";

import "@styles/reset.css";
import Line from "@components/Line";
import theme from "@styles/theme";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Wave from "@images/wave.svg";

const Main = styled(Box)`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.dark[200]};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23181f2a' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    url(${Wave});
  background-repeat: repeat, no-repeat;
  background-size: auto, contain;
  background-position: bottom, bottom;
  background-color: ${(props) => props.theme.colors.background};
`;

const Center = styled(Box)`
  max-width: ${(props) =>
    `calc(${props.theme.breakpoints.xl} + 2*${props.theme.space[4]}px)`};
  width: 100%;
  margin: ${(props) => props.theme.space[3] + 65}px auto
    ${(props) => props.theme.space[3]}px;
  background-color: ${(props) => props.theme.colors.backgroundBody};
  padding: ${(props) => props.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  border-radius: 5px;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    padding: ${(props) => props.theme.space[3]}px;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes[6]};
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.text};
  letter-spacing: 1px;
  margin-top: ${(props) => props.theme.space[2]}px;
  margin-bottom: ${(props) => props.theme.space[4]}px;
  text-transform: uppercase;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: ${(props) => props.theme.space[1]}px;
    margin-bottom: ${(props) => props.theme.space[3]}px;
    font-size: ${(props) => props.theme.fontSizes[5]};
  }
`;

const MainLayout = ({ children, location, title, type }) => {
  const local = location
    ? location.pathname.slice(1).replace("/", " / ")
    : "No text";
  if (type === "home") {
    return (
      <ThemeProvider theme={theme}>
        <Main>
          {children}
          <Footer fixed={true} />
        </Main>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
        <Center as="main">
          <Line my={0} right>
            {local}
          </Line>
          {title && <Title>{title}</Title>}
          {children}
        </Center>
        <Footer />
      </Main>
    </ThemeProvider>
  );
};

export default MainLayout;
