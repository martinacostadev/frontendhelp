import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {BsCodeSlash} from "react-icons/bs";

export default function PracticeSites() {
  return (
    <Link href="/practicesites">
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
            bgGradient="linear(to-b, teal.500, teal.300)"
            borderRadius={"100%"}
            color={"white"}
            p={4}
          >
            <Icon as={BsCodeSlash} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text textStyle="title">Sitios de Práctica</Text>
            <Text
              sx={{
                ".mainBox:hover &": {
                  color: "gray.800",
                },
              }}
              textStyle="description"
            >
              Codewars, FrontEndMentor, Codepen
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
}
