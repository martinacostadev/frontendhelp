import { Box, Center, SimpleGrid } from '@chakra-ui/react'

import { sections } from 'data/sections'
import Section from './Section'

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
            isNew={section.isNew}
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
