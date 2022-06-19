import {
  Avatar,
  Box,
  Container,
  Link,
  Stack,
  Text,
  WrapItem,
} from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'

export default function start() {
  return (
    <Container
      bgColor="background"
      borderRadius={12}
      boxShadow="dark-lg"
      my={4}
      px={8}
      py={{ base: 0, md: 4 }}
    >
      <PageTitle title="Twitter" />

      <Box my={8}>
        <Text fontSize="lg" fontWeight="bold">
          Gente a la cual seguir para aprender y/o consultar.
        </Text>
      </Box>

      <Stack direction="column" gap={4} mt={4}>
        <Link isExternal href="https://twitter.com/midudev">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Midudev"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_400x400.jpg"
            />
            <Text ml={4}>Midudev</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/goncy/">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Goncy Pozzo"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1199686661954818050/IRXOiWJY_400x400.jpg"
            />
            <Text ml={4}>Goncy Pozzo</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/lupitacode">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Lupita Code"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1344875504046899201/1Fz8DTFJ_400x400.jpg"
            />
            <Text ml={4}>Lupita Code</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/DamianCatanzaro">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Damián Catanzaro"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1317200899182415872/m4_aZnYy_400x400.jpg"
            />
            <Text ml={4}>Damián Catanzaro</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/explicocongatos">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Te lo explico con gatitos"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1379933100914925568/aGGVGcQV_400x400.jpg"
            />
            <Text ml={4}>Te lo explico con gatitos</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/JuaniGallo">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Juani Gallo"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1200834236456013824/XrFjjp5J_400x400.jpg"
            />
            <Text ml={4}>Juani Gallo</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/MajoLedes">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Majo Ledes"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1396583477949181955/KpqkA-EK_400x400.jpg"
            />
            <Text ml={4}>Majo Ledes</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/DorianDesings">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Dorian Designs"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1298304362045988874/8ogCViWc_400x400.jpg"
            />
            <Text ml={4}>Dorian Designs</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/printmaga">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Print Maga"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1340817339789537280/3g5a2AuE_400x400.jpg"
            />
            <Text ml={4}>Print Maga</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/AndreusCafe">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Andreús Café"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1386425263261687813/zTXOodtQ_400x400.jpg"
            />
            <Text ml={4}>Andreús Café</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/Ari_Reinventada">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Ari Reinventada"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1124951388155518976/9cERWUH9_400x400.jpg"
            />
            <Text ml={4}>Ari Reinventada</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/lndgalante">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Leonardo Galante"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1358862442416267271/wsjdZAmH_400x400.png"
            />
            <Text ml={4}>Leonardo Galante</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/sachalifs">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Sacha Lifszyc"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1356249844336226304/OOLO35lF_400x400.jpg"
            />
            <Text ml={4}>Sacha Lifszyc</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/vickycharra">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Vicky / Sailor Recruiter"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1128069299590111232/4B3theMA_400x400.jpg"
            />
            <Text ml={4}>Vicky / Sailor Recruiter</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/esacrosa">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="Ale Esacrosa"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1318042094720614401/unirVjET_400x400.jpg"
            />
            <Text ml={4}>Ale Esacrosa</Text>
          </WrapItem>
        </Link>
        <Link isExternal href="https://twitter.com/martinacostadev">
          <WrapItem alignContent="center" alignItems={'center'}>
            <Avatar
              name="martinacostadev"
              size="lg"
              src="https://pbs.twimg.com/profile_images/1325138680579674113/OZye7oj3_400x400.jpg"
            />
            <Text ml={4}>martinacostadev</Text>
          </WrapItem>
        </Link>
      </Stack>
    </Container>
  )
}
