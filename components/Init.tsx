import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {BsFillPlayFill} from "react-icons/bs";

export default function Init() {
  return (
    <Link href="/start">
      <Box
        _hover={{
          background: "white",
          color: "black",
        }}
        bgGradient="linear(to-b, blue.500, blue.300)"
        borderRadius={12}
        className="mainBox"
        color="white"
        p={4}
      >
        <HStack>
          <Box bg={"white"} borderRadius={"100%"} color={"blue.400"} p={4}>
            <Icon as={BsFillPlayFill} color="red" h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" fontWeight="bold">
              Comienzo
            </Text>
            <Text
              color="white"
              fontSize="md"
              sx={{
                ".mainBox:hover &": {
                  color: "black",
                },
              }}
              textStyle="description"
            >
              HTML, CSS y JavaScript: semantic, CSS flex and grid
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
}
