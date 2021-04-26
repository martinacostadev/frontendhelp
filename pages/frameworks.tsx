import {Container, Image, Box, Text} from "@chakra-ui/react";
import React from "react";

import styles from "../styles/Background.module.css";

export default function start() {
  return (
    <Box className={styles.background} height={"2xl"}>
      <Container
        bgGradient="linear(to-tr, gray.100, gray.50)"
        borderRadius={12}
        className={styles.container}
        my={8}
        p={8}
      >
        <Box className={styles.image}>
          <Image
            alt="Woman paying for a purchase"
            borderRadius={12}
            height={140}
            src="https://bit.ly/2jYM25F"
          />
        </Box>
        <Box mt={24}>
          <Text textStyle="bigTitle">Frameworks</Text>
          <Text textStyle="descripcion">React, Angular, Vue, Svelt, Ember</Text>
        </Box>

        <Box mt={4}>
          <Text fontSize={14}>
            Los frameworks de JavaScript son una parte esencial del desarrollo web front-end
            moderno, los cuales proveen a los desarrolladores herramientas probadas y testeadas para
            la creación de aplicaciones web interactivas y escalables
          </Text>
        </Box>

        <Box mt={4}>
          <Text fontSize="l" fontWeight="bold">
            ¿Qué framework/librería debo aprender?
          </Text>
          <Text fontSize={14} mt={4}>
            Todas tienen sus ventajas y desventajas, si buscas por salida laboral hoy en día React
            es el más demandado.
          </Text>
        </Box>

        <Box mt={4}>
          <Text fontSize={14} fontWeight="bold" my={2}>
            React:
          </Text>
          <Text fontSize={14}>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
          <Text fontSize={14} fontWeight="bold" my={2}>
            Angular:
          </Text>
          <Text fontSize={14}>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
          <Text fontSize={14} fontWeight="bold" my={2}>
            Vue:
          </Text>
          <Text fontSize={14}>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
          <Text fontSize={14} fontWeight="bold" my={2}>
            Svelte:
          </Text>
          <Text fontSize={14}>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
          <Text fontSize={14} fontWeight="bold" my={2}>
            Ember:
          </Text>
          <Text fontSize={14}>
            Es una librería, dos de las aplicaciones web más utilizadas en el mundo están
            desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la
            capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta,
            dinámica y escalable con un rendimiento fiable, la elección debe ser React.js
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
