import { extendTheme } from "@chakra-ui/react";
import { ButtonsStyles as Button } from "./components/ButtonsStyles";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F9FBFC",
      },

      a: {
        textDecoration: "underline",
        color: '0000',
        fontWeight: "bold"
      },
    },
  },
  colors: {
    primary: "#CDA434",
    secondary: "#468966",
    warning: "#EB1D36",
  },
  components: {
    Button,
  },
});

export default theme;
