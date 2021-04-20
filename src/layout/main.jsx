import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass";

import "@styles/reset.css";
import theme from "@styles/theme";

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box as="header" px={[3, 5]}>
        silly header
      </Box>
      <Box as="main" px={[3, 5]}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
