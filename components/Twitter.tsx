import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ImTwitter } from 'react-icons/im'

export default function Twitter() {
  return (
    <Link href="/twitter">
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
            bgGradient="linear(to-b, twitter.500, twitter.300)"
            borderRadius={'100%'}
            color={'white'}
            p={4}
          >
            <Icon as={ImTwitter} h={10} w={10} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Twitter
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
              Gente a la cual seguir para aprender y/o consultar.
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  )
}
