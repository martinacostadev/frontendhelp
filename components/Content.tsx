import {SimpleGrid} from "@chakra-ui/react";

import Channels from "./Channels";
import Communities from "./Communities";
import Design from "./Design";
import Frameworks from "./Frameworks";
import Hostings from "./Hostings";
import Init from "./Init";
import PracticeSites from "./PracticeSites";
import Projects from "./Projects";
import Repositories from "./Repositories";
import Resources from "./Resources";
import Testing from "./Testing";
import Twitter from "./Twitter";

export default function Content() {
  return (
    <SimpleGrid columns={{base: 1, md: 2}} gap={6} py={4}>
      <Init />
      <Frameworks />
      <Repositories />
      <Design />
      <Testing />
      <Communities />
      <Channels />
      <Resources />
      <PracticeSites />
      <Hostings />
      <Twitter />
      <Projects />
    </SimpleGrid>
  );
}
