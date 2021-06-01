import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {FaBookOpen} from "react-icons/fa";

export default function Interviews() {
  return (
    // <Link href="#">
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
          <Icon as={FaBookOpen} h={10} w={10} />
        </Box>
        <Box pl={2}>
          <Text fontSize="3xl" textStyle="title">
            Consejos Entrevistas
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
            Próximamente...
          </Text>
        </Box>
      </HStack>
    </Box>
    // </Link>
  );
}
