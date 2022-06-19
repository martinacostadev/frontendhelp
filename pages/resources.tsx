import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid} from "@chakra-ui/react";
import Head from "next/head";
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
        <PageTitle title="Recursos" />

        <Box my={8}>
          <Text fontSize="lg" fontWeight="bold">
            Sitios en donde encontrarás recursos de FrontEnd.
          </Text>
        </Box>

        <Grid gap={4}>
          <Link isExternal href="https://developer.mozilla.org/es/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Developer Mozilla <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.freecodecamp.org/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Freecodecamp <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://es.javascript.info/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              JavaScript Info <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.purereact.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Pure React <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.w3schools.com/">
            <Text fontSize="xl" fontWeight="bold">
              W3Schools <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
