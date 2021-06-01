import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {BiBrain} from "react-icons/bi";

export default function Mentoring() {
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
          <Icon as={BiBrain} h={10} w={10} />
        </Box>
        <Box pl={2}>
          <Text textStyle="title">Mentorías</Text>
          <Text
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
