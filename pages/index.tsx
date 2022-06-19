import { Container } from '@chakra-ui/react'
import Head from 'next/head'

import { Header, NavBar, Content } from 'components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Help</title>
      </Head>
      <Container
        bg="background"
        borderRadius={8}
        maxW="container.xl"
        minW="container.md"
        my={{ sm: 0, md: 8 }}
      >
        <NavBar />
        <Header />
        <Content />
      </Container>
    </>
  )
}
