import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'
import Page from './Page'

export default function start() {
  return (
    <Page>
      <PageTitle title="Proyectos" />

      <Box mt={8}>
        <Link
          isExternal
          href="https://dev.to/jorgeucano/deberias-colaborar-en-proyectos-open-source-1onf"
        >
          <Text fontSize="xl" fontWeight="bold">
            ¿Por qué colaborar en Proyectos Open Source?
          </Text>
        </Link>
      </Box>

      <Grid gap={4} mt={8} pb={6}>
        <Link isExternal href="https://github.com/explore">
          <Text fontSize="xl" mt={2}>
            GitHub <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Page>
  )
}
