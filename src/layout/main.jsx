import React from "react";
import { ThemeProvider } from "styled-components";
import { Box, Image } from "rebass";
import { motion } from "framer-motion";
import Logo from "../images/logo.svg";

import "@styles/reset.css";
import theme from "@styles/theme";

const FadingHeaderVariants = {
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

const FadingHeader = ({ state, children }) => {
  const { transitionStatus } = state;
  return (
    <motion.header
      initial={"exiting"}
      animate={transitionStatus}
      variants={FadingHeaderVariants}
    >
      {children}
    </motion.header>
  );
};

const MainLayout = ({ children, state }) => {
  return (
    <ThemeProvider theme={theme}>
      <FadingHeader state={state}>
        <Box px={[3, 5]} py={4}>
          <Image src={Logo} alt="Gatsbygram Logo" height={48} />
        </Box>
      </FadingHeader>
      <Box as="main" px={[3, 5]}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
