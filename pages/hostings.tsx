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
      <PageTitle title="Hosting" />

      <Box mb={8}>
        <Text>
          La palabra hosting web (o hospedaje web) significa “alojamiento web”,
          y proviene de la analogía de un edificio (alojamiento). Es decir, el
          edificio sería el proveedor que ofrece el hosting y que, por lo tanto,
          aloja nuestra web. Resumen: de forma metafórica un hosting podría ser
          como un edificio donde nuestra web se aloja.
        </Text>
      </Box>

      <Box my={8}>
        <Text fontSize="xl" mt={2}>
          ¿Qué hosting debo utilizar?
        </Text>
        <Text mt={4}>
          Depende del proyecto que realices y la escalabilidad que vaya a tener
          el mismo.
        </Text>
      </Box>

      <Grid gap={4} mt={4} pb={6}>
        <Link isExternal href="https://vercel.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Vercel <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://www.heroku.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Heroku <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://www.netlify.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Netlify <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://www.digitalocean.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Digital Ocean <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://surge.sh/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Surge <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://pages.github.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            GitHub Pages <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Container>
  )
}
