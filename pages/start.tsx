import { Container, Box, Text, SimpleGrid } from '@chakra-ui/react'
import ExternalLink from 'components/ExternalLink'
import { startLinks } from 'data/startLinks'

import PageTitle from '../components/PageTitle'

const GridResource = ({ resources }) => (
  <SimpleGrid columns={{ sm: 1, md: 2 }} gap={6} py={4}>
    {resources.map((link) => (
      <ExternalLink key={link.text} href={link.href} text={link.text} />
    ))}
  </SimpleGrid>
)

export default function start() {
  const spanishResources = startLinks.filter((links) => links.language === 'es')
  const englishResources = startLinks.filter((links) => links.language === 'en')

  return (
    <Container
      bgColor="background"
      borderRadius={{ sm: 0, md: 12 }}
      boxShadow="dark-lg"
    >
      <PageTitle title="Comienzo" />

      <Text textStyle="descripcion">
        HTML, CSS y JavaScript: semantic, CSS Flex y Grid.
      </Text>

      <Box mt={4}>
        <Text>
          Las bases del frontend son comprender y utilizar correctamente la
          semántica de HTML, los estilos de CSS y las diferentes propiedades y
          funciones de JavaScript.
        </Text>
      </Box>

      <Text fontSize="xl" fontWeight="bold" my={6}>
        Recursos en Español
      </Text>

      <GridResource resources={spanishResources} />

      <Text fontSize="xl" fontWeight="bold" my={6}>
        Recursos en Inglés
      </Text>

      <GridResource resources={englishResources} />
    </Container>
  )
}
