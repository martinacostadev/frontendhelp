import {Box, Text} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bgGradient="linear(to-b, primary.500, primary.400)" borderRadius={12} color="white" p={4}>
      <Text fontSize={{base: "30px", md: "20px"}} fontWeight="bold" pb={4}>
        ¿Por dónde empezar?
      </Text>
      <Text fontSize={{base: "24px", md: "18px"}} noOfLines={2} opacity="0.9" pb={2}>
        Recomendaciones acerca de como comenzar y/o avanzar en el mundo de Frontend.
      </Text>
    </Box>
  );
}
