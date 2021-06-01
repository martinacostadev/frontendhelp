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
          <title>Diseño UX/UI - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Heading as="h3" size="lg">
            Diseño UX/UI
          </Heading>
        </Box>

        <Box mt={4}>
          <Link isExternal href="https://www.neoland.es/blog/que-es-el-ux-ui-design">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              ¿Qué es el diseño UX/UI? <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Box>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://www.figma.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Figma <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Box>
            <Text>
              Figma es una herramienta para diseñar interfaces que apareció a finales de 2015 y
              comenzó a posicionarse rápidamente al ser la primera en tener colaboración en tiempo
              real.
            </Text>
          </Box>

          <Link isExternal href="https://mobbin.design/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Mobbin Design <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Box>
            <Text>
              Encontrarás patrones solo de iOS. Están muy bien categorizados, ya que puedes filtrar
              por categoría, patrones (patterns) y elementos concretos.
            </Text>
          </Box>

          <Link isExternal href="https://dribbble.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Dribbble <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Box>
            <Text>
              Es una comunidad online, o “red social”, para profesionales creativos que desean ver o
              publicar portafolios digitales de trabajos gráficos, encontrar inspiración,
              comunicarse con otros usuarios de su sector, obtener o proporcionar feedback sobre
              proyectos visuales y, descubrir recursos y oportunidades de empleo relacionadas al
              mundo del diseño a nivel global.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
