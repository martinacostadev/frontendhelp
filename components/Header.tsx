import {Box, Text} from "@chakra-ui/react";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <Box
      bgGradient="linear(to-b, primary.500, primary.400)"
      borderRadius={12}
      className={styles.background}
      color="white"
      p={4}
    >
      <Text fontSize="xl" fontWeight="bold" pb={4}>
        ¿Por dónde empezar?
      </Text>
      <Text noOfLines={2} opacity="0.9" pb={2}>
        Recomendaciones acerca de como comenzar y/o avanzar en el mundo de Frontend.
      </Text>
    </Box>
  );
}
