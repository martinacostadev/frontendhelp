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
        <PageTitle title="Consejos Entrevistas" />

        <Grid gap={4} mt={4}>
          <Link isExternal href="https://www.youtube.com/watch?v=_g2kemGO5tY">
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Video de @martindevaluado <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}
