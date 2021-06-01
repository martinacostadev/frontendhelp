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
          <title>Comunidades - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Heading as="h3" size="lg">
            Comunidades
          </Heading>
        </Box>

        <Box my={8}>
          <Text fontSize="lg" fontWeight="bold">
            Las comunidades son un lugar dónde se pueden realizar consultas, ver material, compartir
            proyectos y mucho más!
          </Text>
        </Box>

        <Grid gap={4}>
          <Link isExternal href="https://frontend.cafe/">
            <Text fontSize="xl" mt={2}>
              FrontEndCafe <ExternalLinkIcon mx="2px" />
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
    </Box>
  );
}
