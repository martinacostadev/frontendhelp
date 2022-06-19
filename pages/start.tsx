import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import ExternalLink from 'components/ExternalLink'
import { startLinks } from 'data/startLinks'

import PageTitle from '../components/PageTitle'
import Page from './Page'

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
    <Page>
      <PageTitle title="Comienzo" />

      <Text textStyle="descripcion" mb={4}>
        HTML, CSS y JavaScript: semantic, CSS Flex y Grid.
      </Text>

      <Box mt={4}>
        <Text>
          Las bases del frontend son comprender y utilizar correctamente la
          semántica de HTML, los estilos de CSS y las diferentes propiedades y
          funciones de JavaScript.
        </Text>
      </Box>

      <Text fontSize="xl" fontWeight="bold" mt={8} mb={2}>
        Recursos en Español
      </Text>

      <GridResource resources={spanishResources} />

      <Text fontSize="xl" fontWeight="bold" mt={6} mb={2}>
        Recursos en Inglés
      </Text>

      <GridResource resources={englishResources} />
    </Page>
  )
}
