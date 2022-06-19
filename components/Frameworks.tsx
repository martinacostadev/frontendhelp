import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {AiFillTool} from "react-icons/ai";

export default function Frameworks() {
  return (
    <Link href="/frameworks">
      <Box bg={"white"} borderRadius={12} borderWidth={1} p={4} style={{cursor: "pointer"}}>
        <HStack>
          <Box
            bgGradient="linear(to-b, green.500, green.300)"
            borderRadius={"100%"}
            color={"white"}
            p={4}
          >
            <Icon as={AiFillTool} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Frameworks
            </Text>
            <Text fontSize={{base: "26px", md: "16px"}} textStyle="description">
              React, Angular, Vue, Svelte, Ember
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
}
