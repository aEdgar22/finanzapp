import { darken } from "@chakra-ui/theme-tools";

export const ButtonsStyles = {
  baseStyle: {},

  sizes: {},

  variants: {
    primary: {
      bg: "secondary",
      color: "#FFFFFF",
      _hover: {
        bg: darken("secondary", 4),
      },
    },
  },

  defaultProps: {},
};
