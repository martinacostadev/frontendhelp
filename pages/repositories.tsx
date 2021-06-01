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
          <title>Repositorios - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Heading as="h3" size="lg">
            Repositorios
          </Heading>
        </Box>

        <Box mt={4}>
          <Text>
            Un repositorio de código es un lugar donde el código de una aplicación o de un programa
            cualquiera está almacenado y desde donde se puede distribuir, versionar y colaborar en
            equipo.
          </Text>
        </Box>

        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            ¿Qué respositorio debo utilizar?
          </Text>
          <Text mt={4}>
            Hoy en día los más utilizados son: GitHub, Bitbucket, GitLab. Cada equipo de trabajo
            utiliza el que más le convenga.
          </Text>
        </Box>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://github.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              GitHub <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://bitbucket.org/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Bitbucket <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://gitlab.com/gitlab-org/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Gitlab <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}