import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/inter'
import '@fontsource/open-sans/700.css'
import '@fontsource/raleway/400.css'
import Head from 'next/head'
import '../styles/globals.css'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
