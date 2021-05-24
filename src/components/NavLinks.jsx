import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Flex } from "rebass";
import TransitionLink from "gatsby-plugin-transition-link";
import { Transition } from "react-transition-group";

const Link = styled(TransitionLink)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.dark[400]};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-family: ${(props) => props.theme.fonts.menu};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -4px;
    left: 0;
    transition: width 0.2s ease-in-out;
    background-color: ${(props) =>
      props.theme.colors.primary[400]
        ? props.theme.colors.primary[400]
        : "red"};
  }
  &.active,
  &:hover {
    color: ${(props) =>
      props.theme.colors.dark[100] ? props.theme.colors.dark[100] : "black"};
    &::after {
      width: 20px;
    }
  }
`;

const mobileMenuStyle = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.25s linear;
  background-color: ${(props) => props.theme.colors.dark[900]};
  z-index: ${(props) => props.theme.zIndex.nav};
  right: 0;
`;

const Container = styled(Flex)`
  grid-gap: ${(props) => props.theme.fontSizes[props.gap]};
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    ${mobileMenuStyle}
    ${(props) =>
      props.state === "entering" &&
      css`
        top: 0;
        opacity: 1;
      `}
    ${(props) =>
      props.state === "entered" &&
      css`
        top: 0;
        opacity: 1;
      `}
    ${(props) =>
      props.state === "exiting" &&
      css`
        top: 100%;
        opacity: 0;
      `}
    ${(props) =>
      props.state === "exited" &&
      css`
        top: -100%;
        opacity: 0;
      `}
  }
`;
const NavButton = styled.div`
  position: fixed;
  width: 30px;
  top: 15px;
  right: 15px;
  display: none;
  z-index: ${(props) => props.theme.zIndex.nav + 1};
  &::after,
  &::before,
  & div {
    background: ${(props) => props.theme.colors.dark[100]};
    content: "";
    display: block;
    height: 4px;
    border-radius: 3px;
    margin: 4px 0;
    transition: 0.5s;
  }
  ${(props) =>
    props.open &&
    css`
      &:before {
        transform: translateY(8px) rotate(135deg);
      }
    `}
  ${(props) =>
    props.open &&
    css`
      &:after {
        transform: translateY(-8px) rotate(-135deg);
      }
    `}
  ${(props) =>
    props.open &&
    css`
      & div {
        transform: scale(0);
      }
    `}
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const NavLinks = ({ gap = 6, mb = 0 }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.setAttribute("style", `overflow:hidden`);
    } else {
      document.body.setAttribute("style", ``);
    }
  }, [open]);

  return (
    <Transition in={open} timeout={250}>
      {(state) => (
        <>
          <NavButton
            open={open}
            onTouchStart={() => setOpen((prev) => !prev)}
            onClick={() => setOpen((prev) => !prev)}
          >
            <div />
          </NavButton>

          <Container state={state} gap={gap} mb={mb}>
            {menu.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                activeClassName="active"
                partiallyActive={item.text === "Home" ? false : true}
                entry={{
                  delay: 0.25,
                }}
                exit={{
                  length: 0.25,
                }}
              >
                {item.text}
              </Link>
            ))}
          </Container>
        </>
      )}
    </Transition>
  );
};

export default NavLinks;

const menu = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Sobre",
    path: "/sobre",
  },
  {
    text: "Portfolio",
    path: "/portifolio",
  },
  {
    text: "Contato",
    path: "/contato",
  },
];
