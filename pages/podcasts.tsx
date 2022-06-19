import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'

export default function Podcasts() {
  return (
    <Container
      bgColor="background"
      borderRadius={12}
      boxShadow="dark-lg"
      my={4}
      px={8}
      py={4}
    >
      <PageTitle title="Podcasts" />

      <Grid gap={4} mt={6}>
        <Link
          isExternal
          href="https://open.spotify.com/show/5uRPZ5r7bRkW29c5AkppXq"
        >
          <Text fontSize="xl" mt={2}>
            DevRock <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://midu.dev/podcast/">
          <Text fontSize="xl" mt={2}>
            Midudev <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link
          isExternal
          href="https://podtail.com/es/podcast/wecodesign-podcast/"
        >
          <Text fontSize="xl" mt={2}>
            WeCodeSign <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Container>
  )
}
