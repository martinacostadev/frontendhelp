import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid, Heading} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

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
        bgGradient="linear(to-tr, gray.300, gray.50)"
        borderRadius={12}
        boxShadow="dark-lg"
        my={4}
        px={8}
        py={4}
      >
        <Head>
          <title>Cursos - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Heading as="h3" size="lg">
            Cursos
          </Heading>
        </Box>

        <Box my={8}>
          <Text fontSize="lg" fontWeight="bold">
            Sitios recomendados para adquirir cursos pagos y gratuitos.
          </Text>
        </Box>

        <Grid gap={4}>
          <Link isExternal href="https://www.youtube.com/">
            <Text fontSize="xl" mt={2}>
              YouTube <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://platzi.com/home">
            <Text fontSize="xl" mt={2}>
              Platzi <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.udemy.com/">
            <Text fontSize="xl" mt={2}>
              Udemy <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://ed.team/tecnologia/web">
            <Text fontSize="xl" mt={2}>
              EdTeam <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://courseit.io/">
            <Text fontSize="xl" mt={2}>
              Courseit <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.freecodecamp.org/learn/">
            <Text fontSize="xl" mt={2}>
              Freecodecamp Learn <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.pluralsight.com/">
            <Text fontSize="xl" mt={2}>
              Pluralsight <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.codecademy.com/">
            <Text fontSize="xl" mt={2}>
              CodeAcademy <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://jonmircha.com/cursos">
            <Text fontSize="xl" mt={2}>
              Jonmircha <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://fernando-herrera.com/#/courses/Frontend">
            <Text fontSize="xl" mt={2}>
              Fernando Herrera <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
