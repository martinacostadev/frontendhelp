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
          <title>Frameworks - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Text textStyle="bigTitle">Frameworks</Text>
          <Text textStyle="descripcion">React, Angular, Vue, Svelt, Ember</Text>
        </Box>

        <Box mt={4}>
          <Text>
            Los frameworks de JavaScript son una parte esencial del desarrollo web front-end
            moderno, los cuales proveen a los desarrolladores herramientas probadas y testeadas para
            la creación de aplicaciones web interactivas y escalables
          </Text>
        </Box>

        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            ¿Qué framework/librería debo aprender?
          </Text>
          <Text mt={4}>
            Todas tienen sus ventajas y desventajas, si buscas por salida laboral hoy en día React
            es el más demandado.
          </Text>
        </Box>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://es.reactjs.org/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              React <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
          <Link isExternal href="https://angular.io/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Angular <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
          <Link isExternal href="https://vuejs.org/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Vue <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
          <Link isExternal href="https://svelte.dev/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Svelte <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
          <Link isExternal href="https://emberjs.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Ember <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
        </Grid>
      </Container>
    </Box>
  );
}
