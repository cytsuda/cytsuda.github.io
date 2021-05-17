import { rgba } from "polished";
import colors from "./colors";

const theme = {
  breakpoints: ["40em", "52em", "64em", "100em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    ...colors,
    backgroundComp: rgba(colors.dark[900], 0.95),
    backgroundBody: rgba(colors.dark[900], 0.95),
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
    "1.2rem",// 0
    "1.4rem",// 1
    "1.6rem",// 2
    "1.8rem",// 3
    "2rem",// 4
    "2.4rem",// 5
    "3.2rem",// 6
    "3.6rem",// 7
    "4rem",// 8
    "4.8rem",// 9
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
