import { Box, Container } from '@chakra-ui/react'

export default function Page({ children }) {
  return (
    <Box py={4} w="100%">
      <Container
        bgColor="background"
        borderRadius={12}
        boxShadow="dark-lg"
        my={4}
        px={8}
        py={4}
      >
        {children}
      </Container>
    </Box>
  )
}
