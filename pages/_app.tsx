import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import {ChakraProvider} from "@chakra-ui/react";
import "../styles/globals.css";

import theme from "../theme";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
