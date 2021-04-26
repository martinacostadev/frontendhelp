import { theme, extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  textStyles: {
    bigTitle: {
      fontSize: ["42px", "46px"],
      fontWeight: "bold",
    },
    title: {
      fontSize: ["15px", "17px"],
      fontWeight: "bold",
    },
    description: {
      paddingTop: "4px",
      fontSize: ["11px", "14px"],
      color: "gray.500",
    },
  },
  colors: {
    primary: theme.colors.red,
    secondary: theme.colors.blue,
  },
  layerStyles: {
    base: {
      padding: "4px",
    },
  },
});
