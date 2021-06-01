import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Grid, Text, Link, Heading} from "@chakra-ui/react";
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
          <title>HTML, CSS y JavaScript - FrontEnd Help</title>
        </Head>
        <Box mt={2}>
          <Heading as="h3" size="lg">
            Comienzo
          </Heading>
          <Text textStyle="descripcion">HTML, CSS y JavaScript: semantic, CSS Flex y Grid.</Text>
        </Box>

        <Box mt={4}>
          <Text>
            Las bases del frontend son comprender y utilizar correctamente la semántica de HTML, los
            estilos de CSS y las diferentes propiedades y funciones de JavaScript.
          </Text>
        </Box>

        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          Recursos en Español
        </Text>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://github.com/mrcodedev/frontend-developer-resources#-html">
            <Text>
              Inicio HTML <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://desarrolloweb.com/articulos/que-es-el-dom.html">
            <Text>
              DOM <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.wikiwand.com/es/HTML5">
            <Text>
              HTML5 <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.wikiwand.com/es/JavaScript">
            <Text>
              JavaScript <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link
            isExternal
            href="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
          >
            <Text>
              MDN Web JavaScript <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link
            isExternal
            href="https://platzi.com/tutoriales/1339-fundamentos-javascript/1487-que-es-vanilla-js-o-javascript-puro/"
          >
            <Text>
              JavaScript Vainilla <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.youtube.com/watch?v=tP8JiVUiyDo">
            <Text>
              Map, Filter y Reducer <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://developer.mozilla.org/es/docs/Web/CSS">
            <Text>
              MDN Docs CSS <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://desarrolloweb.com/home/css">
            <Text>
              CSS - Desarrollo Web <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://platzi.com/blog/5-tips-para-aprender-css/">
            <Text>
              5 tips CSS <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>

        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          Recursos en Inglés
        </Text>

        <Grid gap={4} mt={4}>
          <Link isExternal flex={1} href="https://www.w3schools.com/">
            <Text>
              HTML, CSS y JavaScript <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link
            isExternal
            flex={1}
            href="https://learn.shayhowe.com/html-css/building-your-first-web-page/"
          >
            <Text>
              First Web - ShayHowe <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.youtube.com/watch?v=5g0x2xv3aHU">
            <Text>
              Explination Internet, HTML, CSS y JavaScript <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://flexboxfroggy.com/">
            <Text>
              CSS Flexbox <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://cssgridgarden.com/#es">
            <Text>
              CSS Grid <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
