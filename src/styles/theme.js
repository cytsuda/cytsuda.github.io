import { rgba } from "polished";
import colors from "./colors";

const theme = {
  breakpoints: ["40em", "52em", "64em", "100em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    ...colors,
    font: {
      normal: "#eee",
      title: colors.primary[500],
      dark: colors.dark[500],
    },
    backgroundComp: rgba(colors.dark[900], 0.95),
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
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "1.8rem",
    "2rem",
    "2.4rem",
    "3.2rem",
    "4.6rem",
  ],
  boxShadow: [`0 0 1em ${rgba(colors.dark[500], 0.3)}`],
  zIndex: {
    backdrop: 99,
    nav: 1,
  }
};

export default theme;
/*

background-color: #111623;
background-image: ;
*/
