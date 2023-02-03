import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from 'components/PageTitle'
import Page from './Page'

export default function start() {
  return (
    <Page>
      <PageTitle title="Roadmap" />

      <Box>
        <Text fontSize="xl" mb={6}>
          ¿Qué ruta debo seguir?
        </Text>
        <Text mt={4}>
          No hay una sola ruta para aprender FrontEnd debido a que hay muchas
          ramas y tecnologías para utilizar en diferentes combinaciones.
        </Text>
        <Text mt={4} mb={4}>
          La idea es que pruebes diferentes tecnologías y veas cuál es la que
          más te gusta.
        </Text>
        <Text as="em">
          El camino inicial más comun es: HTML, CSS, JavaScript y luego algún
          framework como Vue, Angular o React.
        </Text>
        <Text mt={4}>
          Es muy importante entender las bases de HTML, su sintaxis, mejores
          prácticas, SEO. En CSS aprender CSS puro antes que con librerías o
          post procesadores, Flex y Grid. Y en JavaScript lo escencial es el
          manejo del DOM y promesas.
        </Text>
      </Box>

      <Grid gap={4} mt={4} pb={4}>
        <Link isExternal href="https://roadmap.sh/frontend">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Roadmap SH <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://andreasbm.github.io/web-skills/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Andres Bisonni <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link
          isExternal
          href="https://frontendmasters.com/guides/learning-roadmap/"
        >
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            FrontEnd Masters <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Page>
  )
}
