import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'
import Page from './Page'

export default function start() {
  return (
    <Page>
      <PageTitle title="Diseño UX/UI" />

      <Box my={6}>
        <Link
          isExternal
          href="https://www.neoland.es/blog/que-es-el-ux-ui-design"
        >
          <Text fontSize="xl" fontWeight="bold">
            ¿Qué es el diseño UX/UI? <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Box>

      <Grid gap={4} pb={4}>
        <Link isExternal href="https://www.figma.com/">
          <Text fontSize="xl" fontWeight="bold">
            Figma <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Box>
          <Text>
            Figma es una herramienta para diseñar interfaces que apareció a
            finales de 2015 y comenzó a posicionarse rápidamente al ser la
            primera en tener colaboración en tiempo real.
          </Text>
        </Box>

        <Link isExternal href="https://mobbin.design/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Mobbin Design <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Box>
          <Text>
            Encontrarás patrones solo de iOS. Están muy bien categorizados, ya
            que puedes filtrar por categoría, patrones (patterns) y elementos
            concretos.
          </Text>
        </Box>

        <Link isExternal href="https://dribbble.com/">
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Dribbble <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>

        <Box>
          <Text>
            Es una comunidad online, o “red social”, para profesionales
            creativos que desean ver o publicar portafolios digitales de
            trabajos gráficos, encontrar inspiración, comunicarse con otros
            usuarios de su sector, obtener o proporcionar feedback sobre
            proyectos visuales y, descubrir recursos y oportunidades de empleo
            relacionadas al mundo del diseño a nivel global.
          </Text>
        </Box>
      </Grid>
    </Page>
  )
}
