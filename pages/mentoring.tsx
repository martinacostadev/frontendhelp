import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'
import Page from './Page'

export default function Mentoring() {
  return (
    <Page>
      <PageTitle title="Mentorías" />

      <Grid gap={4} mt={4} pb={6}>
        <Link isExternal href="https://frontend.cafe/mentorias">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Programa de Mentorías by @FrontEndCafe <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Page>
  )
}
