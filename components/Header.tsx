import { Box, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box color="white" py={4}>
      <Text fontSize={{ base: '24px', md: '18px' }} noOfLines={2} opacity="0.9">
        ¿No sabes por dónde empezar? Recomendaciones acerca de cómo comenzar y/o
        avanzar en el mundo Frontend.
      </Text>
    </Box>
  )
}
