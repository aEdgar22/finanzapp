import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {},

  styles: {
    global: {
      body: {
        bg: "#F9FBFC",
      },

      a: {
        textDecoration: "none",
      },
    },
  },
  colors: {
    primary: "#CDA434",
    secondary: "#468966",
    warning: "#EB1D36",
    titleColor: "#00541A",
  },
});

export default theme;
