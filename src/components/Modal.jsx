import React, { useEffect } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Transition } from "react-transition-group";
import { motion } from "framer-motion";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

const variantContainer = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
};

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.zIndex.backdrop};
  transition: all 200ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => rgba(props.theme.colors.dark[900], 0.9)};
`;

const variantCenter = {
  entering: { scale: 0 },
  entered: { scale: 1, transition: { delay: 0.1 } },
  exiting: { scale: 0 },
};

const Container = styled(motion.div)`
  margin: auto;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primary[400]};
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms linear;
  z-index: ${(props) => props.theme.zIndex.backdrop + 1};
  position: relative;
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  z-index: ${(props) => props.theme.zIndex.backdrop + 2};
  color: ${(props) => props.theme.colors.dark[300]};
  background-color: ${(props) => rgba(props.theme.colors.dark[500], 0.9)};
  font-size: ${(props) => props.theme.fontSizes[7]};
  padding: ${(props) => props.theme.space[2]}px;
  border-radius: 50%;
  top: -${(props) => props.theme.fontSizes[7]};
  right: -${(props) => props.theme.fontSizes[7]};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => props.theme.colors.dark[100]};
    background-color: ${(props) => rgba(props.theme.colors.dark[600], 0.9)};
    border: 1px solid ${(props) => props.theme.colors.dark[400]};
  }
  &:active {
    color: ${(props) => props.theme.colors.dark[100]};
    background-color: ${(props) => rgba(props.theme.colors.dark[700], 0.9)};
    border: 1px solid ${(props) => props.theme.colors.dark[600]};
  }
`;

const Modal = (props) => {
  const { show, closeHandler, children } = props;

  // Lock Body Scroll
  useEffect(() => {
    if (show) {
      document.body.setAttribute("style", `overflow:hidden`);
    } else {
      document.body.setAttribute("style", ``);
    }
  }, [show]);

  return (
    <Transition in={show} timeout={{ enter: 400, exit: 500 }}>
      {(state) =>
        state !== "exited" && (
          <Wrapper animate={state} variants={variantContainer}>
            <Backdrop onClick={() => closeHandler(false)} />
            <Container
              initial={{ scale: 0 }}
              animate={state}
              variants={variantCenter}
            >
              <CloseIcon onClick={() => closeHandler(false)} />
              {children}
            </Container>
          </Wrapper>
        )
      }
    </Transition>
  );
};

export default Modal;
