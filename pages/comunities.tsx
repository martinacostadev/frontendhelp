import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Container, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'

export default function start() {
  return (
    <Container
      bgColor="background"
      borderRadius={12}
      boxShadow="dark-lg"
      my={4}
      px={8}
      py={4}
    >
      <PageTitle title="Comunidades" />

      <Box mb={8}>
        <Text fontSize="lg">
          Las comunidades son un lugar dónde se pueden realizar consultas, ver
          material, compartir proyectos y mucho más!
        </Text>
      </Box>

      <Grid gap={4}>
        <Link isExternal href="https://frontend.cafe/">
          <Text fontSize="xl" mt={2}>
            FrontEndCafe <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://discord.com/invite/midudev">
          <Text fontSize="xl" mt={2}>
            MiduDev <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://discord.com/invite/rAmPWU6eHg">
          <Text fontSize="xl" mt={2}>
            Goncy <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://escueladevrock.com/">
          <Text fontSize="xl" mt={2}>
            Escuela Dev Rock <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://codear.org/">
          <Text fontSize="xl" mt={2}>
            Codear <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://mujeresentecnologia.org/">
          <Text fontSize="xl" mt={2}>
            Mujeres en tecnología <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://lasdesistemas.org/">
          <Text fontSize="xl" mt={2}>
            Las de Sistemas <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://transistemas.org/">
          <Text fontSize="xl" mt={2}>
            Transistemas <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://comit.ar/">
          <Text fontSize="xl" mt={2}>
            Comit <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Container>
  )
}
