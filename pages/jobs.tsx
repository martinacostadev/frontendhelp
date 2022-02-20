import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid} from "@chakra-ui/react";
import React from "react";

import PageTitle from "../components/PageTitle";

export default function Jobs() {
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
        <PageTitle title="Empleos" />

        <Grid gap={4} mt={4}>
          <Text mt={2}>
            Cualquier sitio es válido para buscar empleo: redes sociales (en especial Twitter), comunidades de Discord, Telegram, etc.
          </Text>

          <Link isExternal href="https://www.linkedin.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              LinkedIn <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://trabajos.gonzalopozzo.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Joncy hecho por @goncy <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.empleosit.com.ar/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              EmpleosIT <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
