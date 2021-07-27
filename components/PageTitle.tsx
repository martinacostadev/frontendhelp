import {Box, Flex, Heading, Icon, Link, Spacer} from "@chakra-ui/react";
import Head from "next/head";
import {useRouter} from "next/router";
import React from "react";
import {IoMdArrowRoundBack} from "react-icons/io";

export default function PageTitle(props) {
  const router = useRouter();
  const {title} = props;

  return (
    <>
      <Head>
        <title>{title} - FrontEnd Help</title>
      </Head>

      <Box mt={4}>
        <Flex>
          <Box py="4">
            <Heading as="h3" display="flex" size="lg">
              {title}
            </Heading>
          </Box>
          <Spacer />
          <Link onClick={() => router.back()}>
            <Box py="4">
              <Heading as="h3" display="flex" size="lg">
                <Icon as={IoMdArrowRoundBack} h={8} w={8} />
              </Heading>
            </Box>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
