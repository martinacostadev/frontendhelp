import {
  Box,
  Container,
  Grid,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import { FaYoutube } from 'react-icons/fa'

import PageTitle from '../components/PageTitle'

export default function Courses() {
  return (
    <Container
      bgColor="background"
      borderRadius={12}
      boxShadow="dark-lg"
      my={4}
      px={8}
      py={4}
    >
      <PageTitle title="Cursos" />

      <Box mb={8}>
        <Text fontSize="lg">
          Sitios recomendados para adquirir cursos pagos y gratuitos.
        </Text>
      </Box>

      <Grid gap={4}>
        <Link isExternal href="https://youtube.com" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box
                bg={'white'}
                borderRadius={'100%'}
                color={'blue.400'}
                display="flex"
              >
                <Icon as={FaYoutube} color="red" h={16} p={2} w={16} />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  YouTube
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://platzi.com" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="Platzi"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGIIP-q474p2VpbM3UGX960btGswDjWybQQ&usqp=CAU"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Platzi
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://codigofacilito.com/" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="Código Facilito"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/png;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Código Facilito
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://udemy.com" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="Udemy"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/jpeg;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Udemy
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://ed.team/tecnologia/web" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="EdTeam"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/png;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  EdTeam
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://courseit.io/" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="Courseit"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/jpeg;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Courseit
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://frontendmasters.com/" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="FrontendMasters"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/jpeg;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  FrontendMasters
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link
          isExternal
          href="https://www.freecodecamp.org/learn/"
          target="_blank"
        >
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="Freecodecamp Learn"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/png;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Freecodecamp Learn
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://www.pluralsight.com/" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="Pluralsight"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBUQDxASEBAXFRIQFhIWFRUZFhYWFRIWGBcWFRYYHSggGholHRYVITEjJikrLi4uFx8zODMuNygtLisBCgoKDg0OGxAQGi0mICUtLS0tLy0tLS0tLS0tLS0tLS0tLy0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgYBBQcDBAj/xABCEAACAQIDAwcICAUDBQAAAAAAAQIDEQQGMQUSIQcTQVFhcYEiQmJykaGxwSMyMzRSc4KyFENTg9FEosIkY5Lw8f/EABsBAQACAwEBAAAAAAAAAAAAAAADBQEEBgIH/8QAOBEAAgEBBQUGBAQGAwAAAAAAAAECAwQFERIxIUFRcYETImGRsdGhweHwBiMyQhQzNVKC8SRisv/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAeOIxEKa3qk4wXW2kGPA9gVzGZwwtPhHfqv0VZe2VjTYjPNR/Z0YRXXJuT91jUnb6ENZY8tvob1K7bTU0hhz2F8BzOpmzGy/mqPqwj80z55Zhxj/1E/Cy+CNd3rR3J/D3NpXJXeso/H2OqA5Usw4tf6ip7Uz3pZqxkf5u93xi/kYV7Ut8X8Pcy7krbpR+PsdOBQMPnesvtKcJd14v5m4wec8PPhUjOk+treXtjx9xsU7fZ57M2HPZ9DVqXZaobcmPLb9Szg+bCY2lWV6VSM12O59Jtp4rFGi008GAAZMAAAAAAAAAAAAAAAAAAAAxcAyfHj8fSoR36s1Be99iWrNDmDNkKN6dC1Sro5ebH/L7Ci4vGVK0nOrNzk+l/BLoRX2m3xp92G1/BFtYrpnWSnU7sfi/ZeLLPtbOs3eOGjur8cknLwWi8blYxOLqVXvVJynLrk7//AA8bi5TVq1Sr+t+3lodHQstGgvy44eO/z1Mi5i4uQZTYM3FzFxcZQZuLmLi4ygzcXMXFxlB6Ua0oPehJxl1p2ftRY9lZyrU7RrrnY6X4Ka8dH4lYuLktKrUpPGDwIK1mpVlhUjj6+ep1rZm1qOJjelNN9MXwku9GwOMUa0oSUoScZLRp2ZdMv5wUrU8TaL0VXRP1l0d+hc2a8Iz7tTY+O76HPWy6J0u/S2rhvXv97C5gipX4riiRZFMAAAAAAAAAAAAADDAMSklxfBFCzTmpzvRwztDSVRay7I9S7ekxnDMe/fD0JeSuE5Lzn+FdnxKhcqrZa2/y4dX7HR3ZdiSVastu5fN/JefAnvGLkAVWUvz0uLnmBlB6XFzzAyg9Li55gzlB6XFzzAyg9Li55gxlB6XFzzAygncXIAZQWXLOZ5YdqnVbnRfDth2rrXYdFo1YzipQalFq6a0aZxa5Ysp5heHkqVR3oy/2t+cuzrRZWO1uHcnpu8CkvK7FUTq0l3t64/X1569NBCnJNJp3T4p9jJlwcwAAAAAAAAACqZ225zEOYpu1Wa4tebB8PazfbTx0cPSnWnpFXt1voS72chx2LnWqSq1Hdyd3/g07ZWcI5Y6v4It7osSrT7Sa7sfi/Zas8jFzAKfKdaZuLkTIwBm4uYAwBm4ubvLGxI43nIubjKMYyi9Vdt6rq4Hy7X2JXwjtVg93omuMH49D7GSdjPLnw2GurTSdV0se8sNnNY7OPQ11xcwCPKbGBm4uRMjAGbi5gDAGbi5gDAGbi5gDAGbmbkQMAXnIu3dMLVfXzUn74fNF5OIUqji1KLtJNSTXQ1ozrOXNqLFUI1POXkzXVJa+D18S1sVbMsktVpyOWvixdnLtoLY9ef1NsADfKQAAAAHhisRGlCVSXCMYuT8EAljsKLyibVvOOGi/Jhac/Wa8leCd/EpxPG4mVWpKpL605Ob8Xex5XKSrLPNyO9slnVCjGmt2vPf8SQI3FyPKbBIEbi4yg9atCcFFyi4qS3otrhJdafSQOqbDwlOvgKMKsIzi6a4NfDqZW9uZHnC88I9+OvNyflL1ZdPibU7JLBOO31Kmje9KVR06ndabWO57fh18yXJp9pW9SH7mXurTjOLjJKUXwaaumUXk5pyjVrRknGSjBNNWa8qWqLPmXaUsLh3WglJqUFZ6NN2Zt2dqNHF+PqUt5wdS3uMdXlw6xW80e3MkwneeGfNy15t/VfqvzSkY3BVKE9yrBwfU+ntXWjpmw8z4fF2inzdT+nK3H1XozZ4/A0sRDcrQU12rTtT6GeKlmp1FmgT0b0tFll2doi3hx1XXf97TjILbtvJNSF54ZupH8D+uu5+cVCcXFuMk4tcGmrNd6NCdGUHhJHQ2e1Uq8c1OWPquaJAjcXPGU2CQI3FxlBIEbi4ygkCNxcZQSLHkbanM4lU5PyKtoP1vNft4eJWriEmndcHqn2nuDcJKSIq9GNanKnLRo7oDXbDx6xGHp1emUVfskuEl7TYl2nisTgZRcZOL1WwAAyeQVfP+M5vCbqfGpKMPBeU/hbxLQc65S8TerSpdEYOb75O3yIq7wps37rpdpaoJ7nj5FNM3I3Fysynb4Eri5G4uMpklcXI3CZjKEdhyp9yoflo2CxEHN095c4kpON+Nno7dXA1+VPuVD8uJSc/15U8cpQk4yVKnaSdmuM+lFm55KafI4mlZf4m1Tp44fqfkzpCox3nLdW81Zytxa6mzQ55pSngpqMXJ70HZJt2UlfQ+PJG3quL34VrSlBJqdrN3bXlJcL8NS3HrZUhs3kMozsdoWba4tPwejOFXt2Fm2HnOvQtCtetT627zXdJ6+JatvZRoYi84fQ1dd5fVb9KPzXE5/tjYlfCStVhaPRJcYPx6O5mi6VSk8UdNStNlvCOSS28Hr0ftrwOq7K2xRxUd6jNS64vhKPejx2xsGhil9JC0+ipHhJePSuxnIqGInTkp05ODWkk7P2oumw89tWhi1dac7Fcf1RXxXsNiFeMllmvYrLRdFahLtLM28Okl7/ew0+28qYjDXklz1L8cVxS9KOq71c0LZ27CYqnWgp0pxnB9Kd0aHbmUKGIvOH0NTW8V5L9aPzR4qWVawJbJfbTyWhdUvVe3kcvuLn37Y2JiMJK1WD3eia4wfc+juZrbmo4NPBnQwnGcc0XivAncXI3MXGU9k7i5G4uMoJXMGLmLjKYwOhcm2NvTq0W/qy5xd0kk7eK95dzlfJ/itzGRjfhOM4f8l8DqhY2d408OBxt8Uslqk1+7B+4ABOVYOTZ9rb2OqeioR/2J/FnWTjWbZXx1f8xr2WRBaP0l5cMcbRJ8I/NGruCINPKdYSBEDKCQuRCDiEdkyp9yoflxKLyj/fP7VP41C9ZT+40Py4lE5SPvv9ql+6obdX+Wuhyl2/1Cf+Z9/Jh9pX9WH7mWXOGOqYfDOrSluzU4cbX4N8U11FY5L/tK/qw/czf8oX3GXr0/iIfyha4qV6pSWKxh6I+bYWdqVa0MRajU03v5cvF/V8S0VKcKkd2SjODWjs00cKN1sPM+IwjSUt+l0wlp+l+aeYV3+42rZcafes7wfB6dHu+9padu5FjK88K91681J+S/Vl0eN/AouMwdSjN06kJQmuhq3iutHVth5mw+LSUZblT+nJ8f0vzkfftLZtHEw3K0FNdD6V2xeqZ6lRjLbE1qF62izS7K0xb5/qXXf97Tj+zNq1sLLfpVHB9K1T7JRfBl/wBhZ2o1rQxFqNTTe/ly8fN8TQbeyPVpXnhm6tPXd8+K9Xzvj2FTkmnZqz0syFOdJ4FrOhZLxjmi9vFarn98nqdznThUjaSU4NaOzTRTtu5FhO88I9yWvNy+q/VesSqbEzNicI0oy36f9KXFfp6YnRNh5ow+LtFPm6n9OT4/pfnE+aFRYMpqlltl3yc6bxjxWnVfP4nLMbgqlCbhWhKEup/FdaPnO27Q2dSxMNytBTj26rtT1TKHt3I1SneeFbqx13H9ddy0l7mQzoNabS0sd80qvdq92XwfXd18yngxOLi2pJprg01ZrvRghylySBEDKZNnluru4yg/+7BeDlZ/E7QcL2dK1Wm+qpB+ySO6G1ZtiZy/4gX5kH4MAA2TnwcZzarY6v8AmSft4/M7Mcgz7S3cfU7VCXtivmmRVVii9uB/nyX/AF+aNBcXMA18DrDNxcwBgZwM3MpkQhlCR2jKf3Gh+XEofKS/+t/tUv3TL3lP7lQ/LiUPlL++/wBql+6ZPNdw5O7P6jP/AD+Z93Jd9pX9WH7mb/lE+4S9en+40HJZ9pX9WH7mWPPeHnVwbhTi5yc6doxV2/KMxX5YtbSvZN8YeiOSbxsNl7Ir4uW7Rg5dctFH1pFty/kLSpjH281F/vkvgvaXnDYenSioU4xhBLgkkkiONHHU3bZfdOn3aPefHd9SubAyZRw9qlW1aquKuvIi/RXS+1ljxOIhSi51JRhBcXJuyRWtvZ0oYe8KNq1XTg/IT7ZdPcjnu1ttV8XLerVHLqjpGPdHTx1JMYxWCNCld9rt0u0rtpeOvRbuuBcNv591p4SPWudkv2R+b9hRa+IlUk5zk5Sbu5PVsxhsNOrJQpwlKT0jFXZetgZC0ni3281F/ukvgiJqU2XP/Du2HB+cn99EVHZWya+Klu0abl1y0UfWkdB2BkujQtOtatVVnbzIvsXT3ssuGw8KUFCnGNOC0SSSRXNvZ0w+HvCm+eqrhZPyIv0pX49yJVTjHaymq3harbLsqEcF4a9XwLLiK8KcXOclCK4uTdkvEpO3s+RjeGEjvPTnJLyf0x6e9lO2xtyvi5Xq1G10QXCK7o/PU1h5lUe437HcUId6u8z4buu9+nM+jFYqdWbqVZOU3rJ6njcwCHAvlFJYIzcXMAZQfTs/jVprrnBe2aO7HEsuUt/F0I9dWn7FO7+B20norDE5f8QPv014MAAmOeBzPlQw9q9Op0Tp7vjCT+UjphT+UrCb+EVRa05pv1ZLdfvcTzJYosbpq9na4Y79nn9cDl1xcxcEOU7ozcXMAZTBm4RgzEZTJ2nKP3Gh+XEoXKUr43h/SpfuqF8yj9xw/wCXE+mWyqDr/wARKmpVd1RUnxsle1urVkzWKOIoWtWW2TqNY/qWHNlV5Odk1qPOVatNwjOMVFS4Sdm3dx1S4rUvITK/nfGVKGDlOlJwnvQjvLVKTs7GUsEa9SpO22nF4JyaXgtF4s99uZiw+DX0k96pqqUWnJ9/Uu1nONvZtxGKvG/NUfwRdr+tLV/A0FSbk3KTbb4tt3b72brYOV8RjLSityn/AFJJpeC84jbb2HTULustij2tRptb3ouS/wBs0qu+C8rot/gtuwcjVq1p170aWtmvpGuxeb4+wumw8rYbBpOMd+r01JK7/StImx2ltOjhob9eooR6L6vsitWzKpreaFrvydR5LMuurfJe+PIhsrY9DCx3aNNR65ayl3y1Z823Mx4fBr6Se9U6KcWnLx6l2spWYM+Val4YVOjHTff133O9o/Ep0qjbbbbb4tt3b8TLlwMWW5KlV9pam9u7V9Xu9Tf7ezbiMVeKfNUvwReq9KWr+BXzAI8GzpKNGnRjkppJeBm4uYBjKSGbi5gDKDNxcwLjKCzcn2G5zGwfRCM5+yyXvZ1woHJZg+Fau+lxpLwSlL4xL+TQWCOLvqrntbS/akvm/UAA9FSD5NpYRVqNSi9JxlH2o+sAym4tNH5/xFGVOcoTVnFuLXanZkC4cpOyearrERXkVNeyol5XtST8GU255yn0Oy11aKMaq3r4715kgQuLjKbBMIhcXGUHacq1Ix2fQlJqMVSTbbsl3s0WYM/U4Xp4RKrLTnH9ReqtZfAoOJ2vWq04UZVHzcIpRguC4dLS1faz4bmdpRUbkp9pKpWeOLbSWmu/j6czo3JztCriK9epWnKpLdhxb08qXBLRLuLDnLAVMThXRpR3pudPpsrJ3bb6iqck/wBpX9WH7pHSWZKe859heDlBLu5WuGyK3FOy/kajQtPENVqmu7b6NeHneJa6tWFOO9KUYQS1bSSSK1t/O1DDXhTfP1dLRfkRfpSv7lc5xtrb2Ixcr1qj3eiC4Rj3R6+18RoS0rvtdvkqldtLi/lHh47EXXMGf4wvDBrfenOS+qvVj097KDjcdUrzdSrOU5Ppb9y6kfIZ3jGB0tlsNGzLCmtvF6+fyRMELi5jKbZMELi4ygmCFxcZQTBC4uMoJhLjYjcsOR9kfxWKTkr06dqsup7slux8WvczOUirVY0abqT0Sx++eh0zK2z/AOGwtOla0t3el60uL/x4G4AMnzqc5Tk5y1e1gAA8gAAGqzDsuOLw86L4Nq8X1TX1X/71nEcTQlTnKnNbsk3GSfQ0foM5/wAo+XN9fxlGN5JWqxXTFXtPvXT2dxlF7cluVKfYzfdlp4P67/E5vcXMGT3lOwFxcAYAXFwBgC05G27RwXPTq3d4QUVFXcmrtrqWq4s8swZxxGLvFS5ml+CDs2vTlq+7QrZgZTT/AICg67ruOMnhrosElsXTXaZbM3MAZTcFxcAYAXFwBgBcXAGAFxcAYAXFwYGAJxW9wXF6W6zsuTNjfweGSkvpZ2qVOxtcI+C+ZUOTvLnOzWLqr6OD+jT6Zrzu5fHuOoHlnK37bsz/AIeGi2y58OnryAAPJzgAAAAAAIyV9eK6iQAORZ4ys8JN1qKbw8ne34JPofovo9hUj9B4ihGpFwnFShJNOL4pp9DOT5xyfPCydainPDt97h2S7O32ksXjsZ110XsqqVGs+9ufHw5+vPWqAjcXJMp0BIEbi4ymSQI3FxlBIEbi4ygkCNxcZQSBG4uMoJAjcXGUEgRuBlMEiwZRy3PHVbtONGL3pT/4x9J+4xlTK9XHTu7ww6flT6/Rj1y9yOwbPwNOhTjSpRUYRVkl8X1vtPEnhsKS9b1VnTpUn3//AD9eHmemFw8aUI04RUYRSjFLRJHuYMkJxgAAAAAAAAAAAAPOpTUk00mnwaej7z0ABzjNeQr3rYJdsqF/buP5ew53WpyhJxmmmnZxaaafamfos0m3stYfGr6WFqlrKrHhNePSuxk0KuGp0Fgv2dJKFfauO9c+PqcMuZuWvbmQcVh7yor+Ih6KvNd8NX4FTnFxbTTTWqfBrvRsRwksUdVQtFKvHNSkmvD7xXUXFyNxc9ZSYlcXI3FxlBK4uRFxlBK4uRuLjKCdzFzCu9E2WTYWS8XirSceZpPz5pq69Fav3GHhFYsirVqdGOapJJeP3i+mLK7Fb3BeU9Eul9xesq5DnVtVxidKnqqWk5esmvJXZr3Fwy/lHDYO0lHnav8AUmk2vVWkSxmvOr/acxbr+ck4WfYv7t/Thz15HhhsPClFQpxUIJWUUrJI9wCA5sAAAAAAAAAAAAAAAAAAAAAGr2psPDYpfTUYTfRK1pLukuJtAND1CcoPNF4PwOe7S5MqUrvD1nD0ZpNd14pP4ldxnJ7jqd91U6q64T4+yVjsgJVWmi1pX5bKexyzc189jOCV8tY6GuFr96hJr2xTPkns2utaVVd8Jf4P0MD2rS96N2P4kqb6a82vc/PEdnV3pRqPuhL/AAfTRy7jZ/Vwtd/25r3ux34GXaXuRmX4kqbqa6tv2OMYPIOPqW3qcaS65SS9yuWDZ/JhHXEYje9GnFL/AHTT+B0cHh15s0qt+2upsTUeS+bxNLsjLWEwvGlRjv8A45WlP/yZugCJvHUqqlSdSWabbfFgAGDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Pluralsight
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://www.codecademy.com/" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="CodeAcademy"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/png;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  CodeAcademy
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://jonmircha.com/cursos" target="_blank">
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="Jonmircha"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/jpeg;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Jonmircha
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link
          isExternal
          href="https://fernando-herrera.com/#/courses/Frontend"
          target="_blank"
        >
          <Box
            _hover={{
              background: 'white',
              color: 'black',
            }}
            borderRadius={12}
            className="mainBox"
            color="white"
            p={2}
          >
            <HStack>
              <Box bg={'white'} borderRadius={'100%'} color={'blue.400'}>
                <Image
                  alt="Fernando Herrera"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/jpeg;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Fernando Herrera
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>
      </Grid>
    </Container>
  )
}
