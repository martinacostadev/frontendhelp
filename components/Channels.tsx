import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { CgScreen } from 'react-icons/cg'

export default function Channels() {
  return (
    <Link href="/channels">
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
            bgGradient="linear(to-b, cyan.500, cyan.300)"
            borderRadius={'100%'}
            color={'white'}
            p={4}
          >
            <Icon as={CgScreen} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Canales YouTube/Twitch
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
              Midudev, GoncyPozzo, EscuelaDevRock y más!
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  )
}
