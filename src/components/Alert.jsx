import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Transition } from "react-transition-group";

import { IoIosCloseCircleOutline } from "@react-icons/all-files/io/IoIosCloseCircleOutline";

const Component = styled.div`
  padding: 0 ${(props) => props.theme.space[4]}px;
  border-radius: ${(props) => props.theme.space[1]}px;
  font-family: ${(props) => props.theme.fonts.text};
  grid-gap: ${(props) => props.theme.space[3]}px;
  border: 1px solid ${(props) => props.theme.colors[props.type][200]};
  color: ${(props) => props.theme.colors[props.type][200]};
  background-color: ${(props) =>
    rgba(props.theme.colors[props.type][500], 0.8)};
  display: flex;
  align-items: center;
  position: relative;
  letter-spacing: 1px;
  height: 50px;
`;

const transitionStyles = {
  entering: css`
    opacity: 1;
    max-height: 50px;
    transform: scaleY(1);
    margin-bottom: ${(props) => props.theme.space[4]}px;
  `,
  entered: css`
    opacity: 1;
    max-height: 50px;
    transform: scaleY(1);
    margin-bottom: ${(props) => props.theme.space[4]}px;
  `,
  exiting: css`
    opacity: 0;
    max-height: 0;
    transform: scaleY(0);
    margin-bottom: 0;
  `,
  exited: css`
    opacity: 0;
    max-height: 0;
    transform: scaleY(0);
    margin-bottom: 0;
  `,
};

const Container = styled.div`
  transform-origin: top;
  overflow: hidden;
  transition: all .2s linear;
  ${(props) => transitionStyles[props.state]}
`;

const CloseIcon = styled(IoIosCloseCircleOutline)`
  color: inherit;
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => props.theme.space[3]}px;
  font-size: ${(props) => props.theme.fontSizes[5]};
`;

const Alert = (props) => {
  const { children, variant, open, setClose } = props;
  return (
    <Transition in={open} timeout={400}>
      {(state) => (
        <Container state={state}>
          <Component type={variant}>
            {children} <CloseIcon onClick={setClose} />
          </Component>
        </Container>
      )}
    </Transition>
  );
};

export default Alert;
