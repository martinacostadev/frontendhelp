import { SimpleGrid, Box, Center } from '@chakra-ui/react'

import Section from './Section'
import { sections } from 'data/sections'

export default function Content() {
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={6} py={4}>
        {sections.map((section) => (
          <Section
            key={section.description}
            description={section.description}
            gradientFrom={section.gradientFrom}
            gradientTo={section.gradientTo}
            icon={section.icon}
            page={section.page}
            title={section.title}
          />
        ))}
      </SimpleGrid>

      <Center py={8}>
        Hecho con ❤ por{' '}
        <Box ml={1}>
          <a
            href="https://twitter.com/martinacostadev"
            rel="noreferrer"
            target="_blank"
          >
            @martinacostadev y la comunidad en Twitch.
          </a>
        </Box>
      </Center>
    </>
  )
}
