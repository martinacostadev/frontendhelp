import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { BsPersonBoundingBox } from 'react-icons/bs'

export default function Jobs() {
  return (
    <Link href="/jobs">
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
            bgGradient="linear(to-b, facebook.500, facebook.300)"
            borderRadius={'100%'}
            color={'white'}
            p={4}
          >
            <Icon as={BsPersonBoundingBox} h={10} w={10} />
          </Box>
          <Box pl={2}>
            <Text fontSize="3xl" textStyle="title">
              Empleos
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
              Próximamente...
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  )
}
