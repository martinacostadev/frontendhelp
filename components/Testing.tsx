import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { GrTest } from 'react-icons/gr'

export default function Testing() {
  return (
    <Link href="/testing">
      <Box
        _hover={{
          background: 'teal.400',
          color: 'white',
        }}
        bg={'white'}
        borderRadius={12}
        borderWidth={1}
        borderColor={'#3a3a3a'}
        className="mainBox"
        p={4}
      >
        <HStack>
          <Box
            bgGradient="linear(to-b, purple.500, purple.300)"
            borderRadius={'100%'}
            color={'white'}
            p={4}
          >
            <Icon as={GrTest} color="white" h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Testing
            </Text>
            <Text
              fontSize="md"
              sx={{
                '.mainBox:hover &': {
                  color: 'gray.800',
                },
              }}
              textStyle="description"
            >
              jest, react-testing-library, cypress, enzyme y vitest
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  )
}
