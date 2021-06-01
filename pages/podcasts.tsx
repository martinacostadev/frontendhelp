import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid, Heading} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function Podcasts() {
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
          <title>Podcasts - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Heading as="h3" size="lg">
            Podcasts
          </Heading>
        </Box>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://open.spotify.com/show/5uRPZ5r7bRkW29c5AkppXq">
            <Text fontSize="xl" mt={2}>
              DevRock <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://midu.dev/podcast/">
            <Text fontSize="xl" mt={2}>
              Midudev <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://podtail.com/es/podcast/wecodesign-podcast/">
            <Text fontSize="xl" mt={2}>
              WeCodeSign <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
