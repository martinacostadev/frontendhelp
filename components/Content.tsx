import {SimpleGrid, Box} from "@chakra-ui/react";

import Channels from "./Channels";
import Communities from "./Communities";
import Courses from "./Courses";
import Design from "./Design";
import Frameworks from "./Frameworks";
import Hostings from "./Hostings";
import Init from "./Init";
import Podcasts from "./Podcasts";
import PracticeSites from "./PracticeSites";
import Projects from "./Projects";
import Repositories from "./Repositories";
import Resources from "./Resources";
import Testing from "./Testing";
import Twitter from "./Twitter";

export default function Content() {
  return (
    <>
      <SimpleGrid columns={{base: 1, md: 2}} gap={6} py={4}>
        <Init />
        <Frameworks />
        <Repositories />
        <Design />
        <Testing />
        <Courses />
        <Communities />
        <Channels />
        <Podcasts />
        <Resources />
        <PracticeSites />
        <Hostings />
        <Twitter />
        <Projects />
      </SimpleGrid>
      <Box align="center" my={4}>
        Made with ❤ by{" "}
        <a href="https://twitter.com/martindevaluado" rel="noreferrer" target="_blank">
          @martindevaluado
        </a>
      </Box>
    </>
  );
}
