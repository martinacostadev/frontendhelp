import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'
import Page from './Page'

export default function Podcasts() {
  return (
    <Page>
      <PageTitle title="Podcasts" />

      <Grid gap={4} mt={6} pb={8}>
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
    </Page>
  )
}
