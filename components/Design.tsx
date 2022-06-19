import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { VscPaintcan } from 'react-icons/vsc'

export default function Design() {
  return (
    <Link href="/design">
      <Box
        _hover={{
          background: 'blue.400',
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
            bgGradient="linear(to-b, red.500, red.300)"
            borderRadius={'100%'}
            color={'white'}
            p={4}
          >
            <Icon as={VscPaintcan} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Diseño UX/UI
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
              Figma, mobbin.design, dribbble.com
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  )
}
