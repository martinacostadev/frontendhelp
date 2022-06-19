import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'

export default function Mentoring() {
  return (
    <Container
      bgColor="background"
      borderRadius={12}
      boxShadow="dark-lg"
      my={4}
      px={8}
      py={4}
    >
      <PageTitle title="Mentorías" />

      <Grid gap={4} mt={4} pb={6}>
        <Link isExternal href="https://frontend.cafe/mentorias">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Programa de Mentorías by @FrontEndCafe <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Container>
  )
}
