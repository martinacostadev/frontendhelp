import {Container, Image, Box, Text} from "@chakra-ui/react";
import React from "react";

import styles from "../styles/Background.module.css";

export default function start() {
  return (
    <Box className={styles.background} display="flex" height={"2xl"}>
      <Container
        bgGradient="linear(to-tr, gray.300, gray.50)"
        borderRadius={12}
        className={styles.container}
        my={8}
        p={8}
      >
        <Box className={styles.image}>
          <Image
            alt="Woman paying for a purchase"
            borderRadius={12}
            height={140}
            src="https://bit.ly/2jYM25F"
          />
        </Box>
        <Box mt={24}>
          <Text textStyle="bigTitle">Comienzo</Text>
          <Text textStyle="descripcion">HTML, CSS y JavaScript: semantic, CSS flex and grid</Text>
        </Box>

        <Box mt={4}>
          <Text>
            Las bases del frontend son comprender y utilizar correctamente la semántica de HTML, los
            estilos de CSS y las diferentes propiedades y funciones de JavaScript.
          </Text>
        </Box>

        <Box mt={4}>
          <Text>Enlaces</Text>
          <Text>Enlaces</Text>
          <Text>Enlaces</Text>
        </Box>
      </Container>
    </Box>
  );
}
