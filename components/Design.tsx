import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import {VscPaintcan} from "react-icons/vsc";

export default function Design() {
  return (
    <Box
      _hover={{
        background: "blue.400",
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
          bgGradient="linear(to-b, red.500, red.300)"
          borderRadius={"100%"}
          color={"white"}
          p={4}
        >
          <Icon as={VscPaintcan} h={8} w={8} />
        </Box>
        <Box pl={2}>
          <Text textStyle="title">Diseño</Text>
          <Text
            sx={{
              ".mainBox:hover &": {
                color: "gray.800",
              },
            }}
            textStyle="description"
          >
            Figma, mobbin.design, dribble.com
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}