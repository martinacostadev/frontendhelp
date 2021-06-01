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
          <title>Testing - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Heading as="h3" size="lg">
            Testing
          </Heading>
        </Box>

        <Box mt={4}>
          <Link isExternal href="https://yeisondaza.com/cuales-son-buenos-tests-en-frontend">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              ¿Cuáles son buenos tests en frontend? <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Box>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://jestjs.io/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Jest <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.cypress.io/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Cypress <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://enzymejs.github.io/enzyme/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Enzime <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://testing-library.com/docs/react-testing-library/intro/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              React testing library <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
