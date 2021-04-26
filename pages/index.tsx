import {Container} from "@chakra-ui/react";
import Head from "next/head";

import Content from "../components/Content";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Help</title>
      </Head>
      <Container bg="gray.100" borderRadius={12} maxW="container.md" my={4} py={4}>
        <Navbar />
        <Header />
        <Content />
      </Container>
    </>
  );
}
