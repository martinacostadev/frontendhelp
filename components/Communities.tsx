import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import {FaPeopleCarry} from "react-icons/fa";

export default function Communities() {
  return (
    <Box
      _hover={{
        background: "teal.400",
        color: "white",
      }}
      bg={"white"}
      borderRadius={12}
      borderWidth={1}
      className="mainBox"
      p={4}
    >
      <HStack>
        <Box
          bgGradient="linear(to-b, orange.500, orange.300)"
          borderRadius={"100%"}
          color={"white"}
          p={4}
        >
          <Icon as={FaPeopleCarry} h={8} w={8} />
        </Box>
        <Box pl={2}>
          <Text textStyle="title">Comunidades</Text>
          <Text
            sx={{
              ".mainBox:hover &": {
                color: "gray.800",
              },
            }}
            textStyle="description"
          >
            FrontEndCafe, Escuela Dev Rock, CodeAr
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}