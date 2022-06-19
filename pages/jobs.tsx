import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'

export default function Jobs() {
  return (
    <Container
      bgColor="background"
      borderRadius={12}
      boxShadow="dark-lg"
      my={4}
      px={8}
      py={4}
    >
      <PageTitle title="Empleos" />

      <Grid gap={4} mt={4} pb={6}>
        <Text mb={4}>
          Cualquier sitio es válido para buscar empleo: redes sociales (en
          especial Twitter), comunidades de Discord, Telegram, etc.
        </Text>

        <Link isExternal href="https://www.linkedin.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            LinkedIn <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://trabajos.gonzalopozzo.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Joncy hecho por @goncy <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.empleosit.com.ar/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            EmpleosIT <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Container>
  )
}
