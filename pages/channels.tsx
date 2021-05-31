import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid, Heading} from "@chakra-ui/react";
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
          <title>Canales YouTube/Twitch - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Heading as="h3" size="lg">
            Canales YouTube/Twitch
          </Heading>
        </Box>

        <Box mt={4}>
          <Text>Gente que genera contenido en vivo o grabado.</Text>
        </Box>

        <Grid gap={4} mt={4}>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            YouTube
          </Text>

          <Link isExternal href="https://www.youtube.com/c/midudev">
            <Text fontSize="xl" mt={2}>
              Midudev
              <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://www.youtube.com/user/jonatanariste/videos">
            <Text fontSize="xl" mt={2}>
              Escuela Dev Rock <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.youtube.com/user/LeonidasEsteban">
            <Text fontSize="xl" mt={2}>
              Leonidas Esteban <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.youtube.com/c/DorianDesings/videos">
            <Text fontSize="xl" mt={2}>
              Dorian Desings <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.youtube.com/channel/UCxPD7bsocoAMq8Dj18kmGyQ">
            <Text fontSize="xl" mt={2}>
              MoureDev <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.youtube.com/c/guillermorodas">
            <Text fontSize="xl" mt={2}>
              Guillermo Rodas <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          {/* TWITCH */}

          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Twitch
          </Text>

          <Link isExternal href="https://www.twitch.tv/midudev">
            <Text fontSize="xl" mt={2}>
              Midudev
              <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.twitch.tv/goncypozzo">
            <Text fontSize="xl" mt={2}>
              Goncy Pozzo <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.twitch.tv/doriandesings">
            <Text fontSize="xl" mt={2}>
              Dorian Desings <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.twitch.tv/baumannzone">
            <Text fontSize="xl" mt={2}>
              Baumannzone <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.twitch.tv/mouredev">
            <Text fontSize="xl" mt={2}>
              MoureDev <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Link isExternal href="https://www.twitch.tv/guillermorodas">
            <Text fontSize="xl" mt={2}>
              Guillermo Rodas <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
