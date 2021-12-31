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
        bgGradient="linear(to-tr, gray.300, gray.50)"
        borderRadius={12}
        boxShadow="dark-lg"
        my={4}
        px={8}
        py={4}
      >
        <PageTitle title="Soft Skills" />

        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            ¿Qué son las habilidades blandas / soft skills?
          </Text>
        </Box>

        <Grid gap={4} mt={4}>
          <Text mb={2}>
            Las habilidades blandas son atributos personales, que se pueden aprender como cualquier otra habilidad, aunque a veces es díficil autoevaluarse para saber cuales nos faltan.
          </Text>
          <Text mb={2}>
            Una forma de saberlo, es pedirle feedback a nuestros amigos/as más cercanos así nos destacan, remarcan o nos hacen saber nuestras mejores y peores características, ejemplos: bondad, buena comunicación, amabilidad, cordialidad, gratitud, etc.
          </Text>

          <Link isExternal href="https://www.argentina.gob.ar/trabajo/teletrabajo/habilidades-blandas">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Argentina Teletrabajo <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://orientacion.universia.net.co/infodetail/consejos/orientacion/que-son-las-habilidades-blandas-4545.html">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Universia <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://postgrado.ucsp.edu.pe/articulos/que-son-habilidades-blandas/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Postgrado <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.indeed.com/career-advice/resumes-cover-letters/soft-skills">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Artículo muy completo en inglés <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.youtube.com/watch?v=gvtWfmUWEvM">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Video 1 <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.youtube.com/watch?v=Ez06_FPQhjE">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Video 2 <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
