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
          <title>Sitios de práctica - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Text textStyle="bigTitle">Sitios de práctica</Text>
        </Box>

        <Box mt={4}>
          <Text>Sitios en los cuales puedes poner en práctica lo que vas aprendiendo.</Text>
        </Box>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://www.frontendmentor.io/challenges">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              FrontendMentor <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.codewars.com/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Codewars <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://codepen.io/challenges">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Codepen <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://courseit.io/desafios">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Courseit <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
