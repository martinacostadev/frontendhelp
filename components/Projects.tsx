import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {RiOpenArmLine} from "react-icons/ri";

export default function Projects() {
  return (
    <Link href="/projects">
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
            bgGradient="linear(to-b, facebook.500, facebook.300)"
            borderRadius={"100%"}
            color={"white"}
            p={4}
          >
            <Icon as={RiOpenArmLine} h={10} w={10} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Proyectos
            </Text>
            <Text
              fontSize="md"
              sx={{
                ".mainBox:hover &": {
                  color: "gray.800",
                },
              }}
              textStyle="description"
            >
              Open Source
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
}
