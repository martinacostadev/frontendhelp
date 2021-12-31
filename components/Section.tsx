import {Box, HStack, Text, Icon, Badge} from "@chakra-ui/react";
import Link from "next/link";

export default function Section({page, icon, title, description, isNew = false, gradientFrom, gradientTo}) {
  return (
    <Link href={page}>
      <Box bg={"white"} borderRadius={12} borderWidth={1} p={4} style={{cursor: "pointer"}}>
        <HStack>
          <Box
            bgGradient={`linear(to-b, ${gradientFrom}, ${gradientTo})`}
            borderRadius={"100%"}
            color={"white"}
            p={4}
          >
            <Icon as={icon} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              {title} {isNew && <Badge ml='1' colorScheme='green'>Nuevo</Badge>}
            </Text>
            <Text fontSize={{base: "26px", md: "16px"}} textStyle="description">
              {description}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
}
