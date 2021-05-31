import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {FiUploadCloud} from "react-icons/fi";

export default function Repositories() {
  return (
    <Link href="/repositories">
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
            bgGradient="linear(to-b, yellow.500, yellow.300)"
            borderRadius={"100%"}
            color={"white"}
            p={4}
          >
            <Icon as={FiUploadCloud} color="white" h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text textStyle="title">Repositorios</Text>
            <Text
              sx={{
                ".mainBox:hover &": {
                  color: "gray.800",
                },
              }}
              textStyle="description"
            >
              Github, GitLab, Bitbucket
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
}
