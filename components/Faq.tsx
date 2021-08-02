import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {BsFillPlayFill} from "react-icons/bs";

export default function Faq() {
  return (
    <Box
      bgGradient="linear(to-b, blue.500, blue.300)"
      borderRadius={12}
      className="mainBox"
      color="white"
      p={4}
      style={{cursor: "pointer"}}
    >
      <HStack>
        <Box bg={"white"} borderRadius={"100%"} color={"blue.400"} p={4}>
          <Icon as={BsFillPlayFill} color="red" h={8} w={8} />
        </Box>
        <Box pl={2}>
          <Text fontSize="3xl" fontWeight="bold">
            Preguntas Frecuentes
          </Text>
          <Text color="white" fontSize="md" textStyle="description">
            Las más comunes de quienes comienzan en Frontend
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
