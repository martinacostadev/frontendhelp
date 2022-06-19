import { Grid, Text } from '@chakra-ui/react'
import ExternalLink from 'components/ExternalLink'

import PageTitle from '../components/PageTitle'
import { cheatSheets } from '../data/cheatSheets'
import Page from './Page'

export default function CheatSheets() {
  return (
    <Page>
      <PageTitle title="Cheat Sheets" />

      <Text mb={8}>
        Para entender conceptos, ver ejemplos y formas de escribir código.
      </Text>

      <Grid gap={4} mt={4} pb={6}>
        {cheatSheets.map((link) => (
          <ExternalLink key={link.text} href={link.href} text={link.text} />
        ))}
      </Grid>
    </Page>
  )
}
