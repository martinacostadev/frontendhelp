import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'
import Page from './Page'

export default function start() {
  return (
    <Page>
      <PageTitle title="Sitios de práctica" />

      <Box mb={8}>
        <Text fontSize="lg">
          Sitios en los cuales puedes poner en práctica lo que vas aprendiendo.
        </Text>
      </Box>

      <Grid gap={6}>
        <Link isExternal href="https://www.frontendmentor.io/challenges">
          <Text fontSize="xl" fontWeight="bold">
            FrontendMentor <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://www.codewars.com/">
          <Text fontSize="xl" fontWeight="bold">
            Codewars <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://codepen.io/challenges">
          <Text fontSize="xl" fontWeight="bold">
            Codepen <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://courseit.io/desafios">
          <Text fontSize="xl" fontWeight="bold">
            Courseit <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Page>
  )
}
