import { rgba } from "polished";
import colors from "./colors";

const theme = {
  breakpoints: {
    xxs: "20em",
    xs: "26.57em",
    sm: "48em",
    md: "64em",
    lg: "80em",
    xl: "90em",
    xxl: "120em",
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    ...colors,
    backgroundComp: rgba(colors.dark[900], 0.98),
    backgroundBody: rgba(colors.dark[900], 0.5),
    backgroundInt: rgba(colors.dark[600], 0.4),
    background: colors.dark[700],
  },
  fonts: {
    menu: "'Josefin Sans', sans-serif",
    text: "'Montserrat', sans-serif",
    serif: "'Merriweather', serif",
    italic: "'Playfair Display', serif",
  },
  fontSizes: [
    "1.2rem", // 0
    "1.4rem", // 1
    "1.6rem", // 2
    "1.8rem", // 3
    "2rem", // 4
    "2.4rem", // 5
    "3.2rem", // 6
    "3.6rem", // 7
    "4rem", // 8
    "4.8rem", // 9
  ],
  boxShadow: [`0 0 1em ${rgba(colors.dark[500], 0.3)}`],
  zIndex: {
    backdrop: 99,
    nav: 20,
  },
};

export default theme;
/*
320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV
1600px
*/
