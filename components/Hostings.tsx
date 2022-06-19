import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineCloudServer } from 'react-icons/ai'

export default function Hostings() {
  return (
    <Link href="/hostings">
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
            bgGradient="linear(to-b, blackAlpha.500, blackAlpha.300)"
            borderRadius={'100%'}
            color={'white'}
            p={4}
          >
            <Icon as={AiOutlineCloudServer} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Hostings
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
              Vercel, Heroku, Netlify, DigitalOcean
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  )
}
