import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid} from "@chakra-ui/react";
import React from "react";

import PageTitle from "components/PageTitle";

export default function start() {
  return (
    <Box
      backgroundAttachment="fixed"
      backgroundImage="url('../static/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      py={4}
      w="100%"
    >
      <Container
        bgColor="background"
        borderRadius={12}
        boxShadow="dark-lg"
        my={4}
        px={8}
        py={4}
      >
        <PageTitle title="Roadmap" />

        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            ¿Que ruta debo seguir?
          </Text>
          <Text mt={4}>
            No hay una sola ruta para aprender FrontEnd debido a que hay muchas ramas y tecnologías para utilizar en diferentes combinaciones.
          </Text>
          <Text mt={4} mb={4}>
            La idea es que pruebes diferentes tecnologías y veas cuál es la que más te gusta.
          </Text>
          <Text as='em'>
            El camino inicial más comun es: HTML, CSS, JavaScript y luego algún framework como Vue, Angular o React.
          </Text>
          <Text mt={4}>
            Es muy importante entender las bases de HTML, su sintaxis, mejores prácticas, SEO. En CSS aprender CSS Pure antes que con librerías o post procesadores, Flex y Grid. Y en JavaScript lo escencial es el manejo del DOM y promesas.
          </Text>

        </Box>

        <Grid gap={4} mt={4}>
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

          <Link isExternal href="https://frontendmasters.com/guides/learning-roadmap/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              FrontEnd Masters <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
