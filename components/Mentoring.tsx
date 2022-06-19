import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import { BiBrain } from 'react-icons/bi'

export default function Mentoring() {
  return (
    // <Link href="#">
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
          <Icon as={BiBrain} h={10} w={10} />
        </Box>
        <Box pl={2}>
          <Text fontSize="3xl" textStyle="title">
            Mentorías
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
            Personas que te ayudan con tus consultas
          </Text>
        </Box>
      </HStack>
    </Box>
    // </Link>
  )
}
