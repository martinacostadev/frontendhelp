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
          <title>Twitter - FrontEnd Help</title>
        </Head>
        <Box mt={4}>
          <Text textStyle="bigTitle">Twitter</Text>
        </Box>

        <Box mt={4}>
          <Text>Gente a la cual seguir para aprender y/o consultar.</Text>
        </Box>

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://twitter.com/midudev">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Midudev <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/goncy/">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Goncy Pozzo <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/lupitacode">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Lupita Code <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/DamianCatanzaro">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Damián Catanzaro <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/explicocongatos">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Te lo explico con gatitos <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/JuaniGallo">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Juani Gallo <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/MajoLedes">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Majo Ledes <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/DorianDesings">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Dorian Designs <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/printmaga">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Print Maga <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/AndreusCafe">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Andreús Café <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/Ari_Reinventada">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Ari Reinventada <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/lndgalante">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Leonardo Galante <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/sachalifs">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Sacha Lifszyc <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/vickycharra">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Vicky / Sailor Recruiter <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/esacrosa">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Ale Esacrosa <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Link isExternal href="https://twitter.com/martindevaluado">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Martindevaluado <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
