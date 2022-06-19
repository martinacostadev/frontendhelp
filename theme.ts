import { ChakraProps, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Inter',
  },
  textStyles: {
    bigTitle: {
      fontSize: ['42px', '46px'],
      fontWeight: 'bold',
    },
    title: {
      fontSize: ['15px', '17px'],
      fontWeight: 'bold',
    },
    description: {
      paddingTop: '4px',
      fontSize: ['11px', '14px'],
      color: 'gray.500',
    },
  },
  colors: {
    background: '#1a202c',
    primary: {
      400: '#F56565',
      500: '#E53E3E',
    },
    secondary: '#0000ff',
  },
  layerStyles: {
    base: {
      padding: '4px',
    },
  },
  styles: {
    global: (props: ChakraProps) => ({
      'html, body': {
        height: '100%',
        backgroundImage: "url('/img/background.svg')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        fontSize: '18px',
      },
    }),
  },
})

export default theme
