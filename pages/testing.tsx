import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Grid,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'

import PageTitle from '../components/PageTitle'

export default function Testing() {
  return (
    <Container
      bgColor="background"
      borderRadius={12}
      boxShadow="dark-lg"
      my={4}
      px={8}
      py={4}
    >
      <Head>
        <title>Testing - FrontEnd Help</title>
      </Head>

      <PageTitle title="Testing" />

      <Box mb={8}>
        <Link
          isExternal
          href="https://yeisondaza.com/cuales-son-buenos-tests-en-frontend"
        >
          <Text fontSize="xl">
            ¿Cuáles son buenos tests en frontend? <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Box>

      <Grid gap={4}>
        <Link isExternal href="https://jestjs.io/" target="_blank">
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
                  alt="Jest"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/png;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Jest
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://www.cypress.io/" target="_blank">
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
                  alt="Cypress"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/jpeg;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Cypress
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link
          isExternal
          href="https://enzymejs.github.io/enzyme/"
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
                  alt="Enzime"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="https://avatars.githubusercontent.com/u/60945302?s=200&v=4"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Enzime
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link
          isExternal
          href="https://testing-library.com/docs/react-testing-library/intro/"
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
                  alt="React testing library"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/jpeg;base64,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"
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  React testing library
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link isExternal href="https://vitest.dev/" target="_blank">
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
                  alt="React testing library"
                  borderRadius="full"
                  h={16}
                  p={2}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkwIiBoZWlnaHQ9IjI5MCIgdmlld0JveD0iMCAwIDE2NSAxNjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zMDFfMikiPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kXzMwMV8yKSI+CjxwYXRoIGQ9Ik0xMjAuODMxIDU3LjI1NDNMODQuNjkzIDEwOS41MDVDODQuMzA5OSAxMTAuMDU5IDgzLjc1NTggMTEwLjQ3NCA4My4xMTQ4IDExMC42ODdDODIuNDczOCAxMTAuOSA4MS43ODA5IDExMC44OTggODEuMTQxMiAxMTAuNjg0QzgwLjUwMTUgMTEwLjQ2OSA3OS45NSAxMTAuMDUyIDc5LjU3MDIgMTA5LjQ5N0M3OS4xOTA1IDEwOC45NDEgNzkuMDAzMiAxMDguMjc3IDc5LjAzNyAxMDcuNjA2TDgwLjQ4MzMgNzguNzU4Mkw1Ny4xMzQzIDczLjgwNjRDNTYuNjM1MyA3My43MDA3IDU2LjE3MDQgNzMuNDc0IDU1Ljc4MDcgNzMuMTQ2NUM1NS4zOTEgNzIuODE5MSA1NS4wODg1IDcyLjQwMDkgNTQuOTAwMSA3MS45MjlDNTQuNzExNyA3MS40NTcxIDU0LjY0MzIgNzAuOTQ2MSA1NC43MDA2IDcwLjQ0MTJDNTQuNzU4IDY5LjkzNjQgNTQuOTM5NSA2OS40NTMyIDU1LjIyOTEgNjkuMDM0NUw5MS4zNjc1IDE2Ljc4MzdDOTEuNzUwNyAxNi4yMjk0IDkyLjMwNDggMTUuODE0NSA5Mi45NDU4IDE1LjYwMThDOTMuNTg2OSAxNS4zODkxIDk0LjI3OTggMTUuMzkwMiA5NC45MTk2IDE1LjYwNTFDOTUuNTU5MyAxNS44MTk5IDk2LjExMDkgMTYuMjM2NyA5Ni40OTA2IDE2Ljc5MjNDOTYuODcwMyAxNy4zNDc4IDk3LjA1NzUgMTguMDExNyA5Ny4wMjM2IDE4LjY4MzNMOTUuNTc3MyA0Ny41MzE0TDExOC45MjYgNTIuNDgyN0MxMTkuNDI1IDUyLjU4ODUgMTE5Ljg5IDUyLjgxNTIgMTIwLjI4IDUzLjE0MjZDMTIwLjY3IDUzLjQ3MDEgMTIwLjk3MiA1My44ODgzIDEyMS4xNiA1NC4zNjAyQzEyMS4zNDkgNTQuODMyMSAxMjEuNDE3IDU1LjM0MzEgMTIxLjM2IDU1Ljg0NzlDMTIxLjMwMyA1Ni4zNTI4IDEyMS4xMjEgNTYuODM2IDEyMC44MzEgNTcuMjU0N0wxMjAuODMxIDU3LjI1NDNaIiBmaWxsPSIjRkNDNzJCIi8+CjxwYXRoIGQ9Ik04Mi45ODY2IDE1My4zNDNDODIuMDI1NCAxNTMuMzQ0IDgxLjA3MzUgMTUzLjE1NiA4MC4xODU1IDE1Mi43ODhDNzkuMjk3NSAxNTIuNDIgNzguNDkwOSAxNTEuODggNzcuODEyMiAxNTEuMkw0My42NjU4IDExNy4wNTZDNDIuMjk5OCAxMTUuNjgzIDQxLjUzNDEgMTEzLjgyNCA0MS41MzY2IDExMS44ODdDNDEuNTM5MiAxMDkuOTUgNDIuMzA5OCAxMDguMDkyIDQzLjY3OTYgMTA2LjcyM0M0NS4wNDkzIDEwNS4zNTMgNDYuOTA2NCAxMDQuNTgyIDQ4Ljg0MzUgMTA0LjU3OUM1MC43ODA3IDEwNC41NzcgNTIuNjM5OSAxMDUuMzQyIDU0LjAxMzQgMTA2LjcwOEw4Mi45ODY2IDEzNS42NzhMMTQ2LjEwNSA3Mi41NjI2QzE0Ny40ODEgNzEuMjA4OCAxNDkuMzM2IDcwLjQ1MzYgMTUxLjI2NiA3MC40NjE1QzE1My4xOTcgNzAuNDY5MyAxNTUuMDQ2IDcxLjIzOTYgMTU2LjQxIDcyLjYwNDVDMTU3Ljc3NSA3My45Njk1IDE1OC41NDYgNzUuODE4NCAxNTguNTU0IDc3Ljc0ODdDMTU4LjU2MSA3OS42NzkgMTU3LjgwNiA4MS41MzQyIDE1Ni40NTIgODIuOTEwMUw4OC4xNTk3IDE1MS4yQzg3LjQ4MTEgMTUxLjg4MSA4Ni42NzQ3IDE1Mi40MiA4NS43ODY5IDE1Mi43ODhDODQuODk5MiAxNTMuMTU2IDgzLjk0NzUgMTUzLjM0NCA4Mi45ODY2IDE1My4zNDNaIiBmaWxsPSIjNzI5QjFCIi8+CjxwYXRoIGQ9Ik04Mi45NTcyIDE1My4zNDNDODMuOTE4NCAxNTMuMzQ0IDg0Ljg3MDMgMTUzLjE1NiA4NS43NTgzIDE1Mi43ODhDODYuNjQ2MyAxNTIuNDIgODcuNDUyOCAxNTEuODggODguMTMxNiAxNTEuMkwxMjIuMjc4IDExNy4wNTZDMTIzLjY0NCAxMTUuNjgzIDEyNC40MSAxMTMuODI0IDEyNC40MDcgMTExLjg4N0MxMjQuNDA1IDEwOS45NSAxMjMuNjM0IDEwOC4wOTIgMTIyLjI2NCAxMDYuNzIzQzEyMC44OTQgMTA1LjM1MyAxMTkuMDM3IDEwNC41ODIgMTE3LjEgMTA0LjU3OUMxMTUuMTYzIDEwNC41NzcgMTEzLjMwNCAxMDUuMzQyIDExMS45MyAxMDYuNzA4TDgyLjk1NzIgMTM1LjY3OEwxOS44Mzg5IDcyLjU2MjZDMTguNDYyOSA3MS4yMDg4IDE2LjYwNzcgNzAuNDUzNiAxNC42Nzc1IDcwLjQ2MTVDMTIuNzQ3MiA3MC40NjkzIDEwLjg5ODIgNzEuMjM5NiA5LjUzMzMxIDcyLjYwNDVDOC4xNjgzOSA3My45Njk1IDcuMzk4MTEgNzUuODE4NCA3LjM5MDI1IDc3Ljc0ODdDNy4zODIzOSA3OS42NzkgOC4xMzc1OSA4MS41MzQyIDkuNDkxMzUgODIuOTEwMUw3Ny43ODQgMTUxLjJDNzguNDYyNyAxNTEuODgxIDc5LjI2OTEgMTUyLjQyIDgwLjE1NjggMTUyLjc4OEM4MS4wNDQ2IDE1My4xNTYgODEuOTk2MyAxNTMuMzQ0IDgyLjk1NzIgMTUzLjM0M1oiIGZpbGw9IiM3MjlCMUIiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjwvZz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzMwMV8yIiB4PSIxLjM5MDIiIHk9IjEwLjQ0MzEiIHdpZHRoPSIxNjcuMTYzIiBoZWlnaHQ9IjE1My45IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjIiIGR5PSIzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMTA4MzMzIDAgMCAwIDAgMC4xMDgzMzMgMCAwIDAgMCAwLjEwODMzMyAwIDAgMCAwLjIgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18zMDFfMiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18zMDFfMiIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zMDFfMiI+CjxyZWN0IHdpZHRoPSIxNjUiIGhlaWdodD0iMTY1IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                  w={16}
                />
              </Box>
              <Box pl={2}>
                <Text fontSize="xl" fontWeight="bold">
                  Vitest
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>
      </Grid>
    </Container>
  )
}
