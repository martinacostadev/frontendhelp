import { Badge, Box, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Section({
  page,
  icon,
  title,
  description,
  isNew = false,
  gradientFrom,
  gradientTo,
}) {
  function moreThanThreeWords(text: string) {
    return text.split(' ').length > 3
  }

  function getFontSize() {
    return moreThanThreeWords(title) ? '1xl' : '2xl'
  }

  return (
    <Link href={page}>
      <Box
        borderRadius={12}
        borderWidth={1}
        borderColor={'#3a3a3a'}
        p={4}
        style={{ cursor: 'pointer' }}
      >
        <HStack>
          <Box
            bgGradient={`linear(to-b, ${gradientFrom}, ${gradientTo})`}
            borderRadius={'100%'}
            color={'white'}
            p={4}
            backgroundColor="red"
            display={'flex'}
          >
            <Icon as={icon} h={8} w={8} />
          </Box>
          <Box pl={2}>
            <Text fontSize={getFontSize()} textStyle="title">
              {title}{' '}
              {isNew && (
                <Badge ml="1" colorScheme="green">
                  Nuevo
                </Badge>
              )}
            </Text>
            <Text
              fontSize={{ base: '26px', md: '16px' }}
              textStyle="description"
            >
              {description}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  )
}
