import {Box, HStack, Text, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {BsFillMicFill} from "react-icons/bs";

export default function Podcasts() {
  return (
    <Link href="/podcasts">
      <Box
        _hover={{
          background: "teal.400",
          color: "white",
        }}
        bg="white"
        borderRadius={12}
        className="mainBox"
        p={4}
      >
        <HStack>
          <Box
            bgGradient="linear(to-b, gray.800, gray.600)"
            borderRadius={"100%"}
            color={"white"}
            p={4}
          >
            <Icon as={BsFillMicFill} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text textStyle="title">Podcasts</Text>
            <Text
              sx={{
                ".mainBox:hover &": {
                  color: "gray.800",
                },
              }}
              textStyle="description"
            >
              DevRock, Midudev, WeCodeSign
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
}
