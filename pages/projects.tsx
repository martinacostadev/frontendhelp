import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import styles from "../styles/Background.module.css";

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
        className={styles.container}
        my={4}
        px={8}
        py={4}
      >
        <Head>
          <title>Proyectos - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Text textStyle="bigTitle">Proyectos Open Source</Text>
        </Box>

        <Box mt={4}>
          <Link
            isExternal
            href="https://dev.to/jorgeucano/deberias-colaborar-en-proyectos-open-source-1onf"
          >
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              ¿Por qué colaborar en Proyectos Open Source?
            </Text>
          </Link>
        </Box>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://github.com/explore">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              GitHub <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://comit.ar/voluntariado">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Aplicación adopción mascotas <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
