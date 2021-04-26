import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import {ImTwitter} from "react-icons/im";

export default function Twitter() {
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
          bgGradient="linear(to-b, twitter.500, twitter.300)"
          borderRadius={"100%"}
          color={"white"}
          p={4}
        >
          <Icon as={ImTwitter} h={10} w={10} />
        </Box>
        <Box pl={2}>
          <Text textStyle="title">Twitter</Text>
          <Text
            sx={{
              ".mainBox:hover &": {
                color: "gray.800",
              },
            }}
            textStyle="description"
          >
            Midudev, Victoruxui, Goncy
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
