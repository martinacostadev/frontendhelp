import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import {CgScreen} from "react-icons/cg";

export default function Channels() {
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
          bgGradient="linear(to-b, cyan.500, cyan.300)"
          borderRadius={"100%"}
          color={"white"}
          p={4}
        >
          <Icon as={CgScreen} h={8} w={8} />
        </Box>
        <Box pl={2}>
          <Text textStyle="title">Canales YouTube/Twitch</Text>
          <Text
            sx={{
              ".mainBox:hover &": {
                color: "gray.800",
              },
            }}
            textStyle="description"
          >
            Midudev, GoncyPozzo, EscuelaDevRock
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
