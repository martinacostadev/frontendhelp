import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'
import Page from './Page'

export default function start() {
  return (
    <Page>
      <PageTitle title="Recursos" />

      <Box mb={6}>
        <Text fontSize="lg">
          Sitios en donde encontrarás recursos de FrontEnd.
        </Text>
      </Box>

      <Grid gap={4} mb={4}>
        <Link isExternal href="https://developer.mozilla.org/es/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Developer Mozilla <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://www.freecodecamp.org/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Freecodecamp <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://es.javascript.info/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            JavaScript Info <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://www.purereact.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Pure React <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://www.w3schools.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            W3Schools <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Page>
  )
}
