import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid} from "@chakra-ui/react";
import React from "react";

import PageTitle from "../components/PageTitle";

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
        <PageTitle title="Frameworks" />

        <Box mt={4}>
          <Text>
            Los frameworks de JavaScript son una parte esencial del desarrollo web front-end
            moderno, los cuales proveen a los desarrolladores herramientas probadas y testeadas para
            la creación de aplicaciones web interactivas y escalables.
          </Text>
        </Box>

        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            ¿Qué framework/librería debo aprender?
          </Text>
          <Text mt={4}>
            Todas tienen sus ventajas y desventajas, si buscás por salida laboral hoy en día, 2021,
            React es el más demandado.
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
            Angular es un framework de desarrollo para JavaScript creado por Google. La finalidad de
            Angular es facilitarnos el desarrollo de aplicaciones web SPA y además darnos
            herramientas para trabajar con los elementos de una web de una manera más sencilla y
            optima.
          </Text>
          <Link isExternal href="https://vuejs.org/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Vue <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text>
            Vue (pronunciado como view) es un framework progresivo para construir interfaces de
            usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para
            ser utilizado incrementalmente. La librería central está enfocada solo en la capa de
            visualización, y es fácil de utilizar e integrar con otras librerías o proyectos
            existentes.
          </Text>
          <Link isExternal href="https://svelte.dev/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Svelte <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text>
            Tiene conceptos parecidos a React, Vue y Angular pero, a la vez, viene con diferencias
            muy importantes. Concretamente hay una diferencia importantísima y es que Svelte tiene
            un paso previo de compilación. ¿Por qué? Porque el código que escribimos con Svelte,
            aunque está basado en lenguajes que ya conoces como HTML, CSS y Javascript, es un código
            que no entendería el navegador sin tratar y tiene que ser compilado previamente.
          </Text>
          <Link isExternal href="https://emberjs.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Ember <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text>
            Es una utilidad por línea de comandos que simplifica el desarrollo de aplicaciones
            Ember.js, pero también hace que sea muy fácil compartir código común entre las
            diferentes aplicaciones Ember. Ember CLI se encarga de todo el trabajo duro, añadir
            librerías de terceros, añadir rutas, controladores, etc, todo con simples comandos que
            nos ahorran mucho trabajo.
          </Text>
        </Grid>
      </Container>
    </Box>
  );
}
