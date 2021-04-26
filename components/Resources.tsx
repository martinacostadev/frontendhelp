import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import {AiOutlineLink} from "react-icons/ai";

export default function Resources() {
  return (
    <Box
      _hover={{
        background: "teal.400",
        color: "white",
      }}
      bg="white"
      borderRadius={12}
      className="mainBox"
      p={4}
    >
      <HStack>
        <Box
          bgGradient="linear(to-b, gray.800, gray.600)"
          borderRadius={"100%"}
          color={"white"}
          p={4}
        >
          <Icon as={AiOutlineLink} h={8} w={8} />
        </Box>
        <Box pl={2}>
          <Text textStyle="title">Recursos</Text>
          <Text
            sx={{
              ".mainBox:hover &": {
                color: "gray.800",
              },
            }}
            textStyle="description"
          >
            W3Schools, Frecodecamp, Developer Mozilla, Pure React
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
