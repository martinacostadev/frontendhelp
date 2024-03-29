import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Grid,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  Text,
} from '@chakra-ui/react'
import { FaYoutube } from 'react-icons/fa'
import { ImTwitch } from 'react-icons/im'

import PageTitle from '../components/PageTitle'
import Page from './Page'

export default function start() {
  return (
    <Page>
      <PageTitle title="Canales YouTube/Twitch" />

      <Box mb={8}>
        <Text fontSize="lg">Gente que genera contenido en vivo o grabado.</Text>
      </Box>

      <Grid gap={4} pb={4}>
        <List>
          <HStack spacing="6px">
            <ListIcon as={FaYoutube} color="red.600" h={12} w={12} />
            <Heading as="h3" size="lg">
              YouTube
            </Heading>
          </HStack>
        </List>

        <Link isExternal href="https://www.youtube.com/c/midudev">
          <Text fontSize="xl" mt={2}>
            Midudev <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link isExternal href="https://youtube.gonzalopozzo.com/">
          <Text fontSize="xl" mt={2}>
            Goncy Pozzo <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
        <Link
          isExternal
          href="https://www.youtube.com/user/jonatanariste/videos"
        >
          <Text fontSize="xl" mt={2}>
            Escuela Dev Rock <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.youtube.com/user/LeonidasEsteban">
          <Text fontSize="xl" mt={2}>
            Leonidas Esteban <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.youtube.com/c/DorianDesings/videos">
          <Text fontSize="xl" mt={2}>
            Dorian Desings <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link
          isExternal
          href="https://www.youtube.com/channel/UCxPD7bsocoAMq8Dj18kmGyQ"
        >
          <Text fontSize="xl" mt={2}>
            MoureDev <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.youtube.com/c/guillermorodas">
          <Text fontSize="xl" mt={2}>
            Guillermo Rodas <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link
          isExternal
          href="https://www.youtube.com/c/LeonardoGalante/videos"
        >
          <Text fontSize="xl" mt={2}>
            Leonardo Galante <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        {/* TWITCH */}
        <List mt={6}>
          <HStack spacing="6px">
            <ListIcon as={ImTwitch} color="purple.700" h={12} w={12} />
            <Heading as="h3" size="lg">
              Twitch
            </Heading>
          </HStack>
        </List>

        <Link isExternal href="https://www.twitch.tv/midudev">
          <Text fontSize="xl" mt={2}>
            Midudev <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.twitch.tv/goncypozzo">
          <Text fontSize="xl" mt={2}>
            Goncy Pozzo <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.twitch.tv/doriandesings">
          <Text fontSize="xl" mt={2}>
            Dorian Desings <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.twitch.tv/baumannzone">
          <Text fontSize="xl" mt={2}>
            Baumannzone <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.twitch.tv/mouredev">
          <Text fontSize="xl" mt={2}>
            MoureDev <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Link isExternal href="https://www.twitch.tv/guillermorodas">
          <Text fontSize="xl" mt={2}>
            Guillermo Rodas <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Page>
  )
}
