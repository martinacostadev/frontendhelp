import {SimpleGrid, Box} from "@chakra-ui/react";
import React from "react";
import {AiFillTool, AiOutlineCloudServer} from "react-icons/ai";
import {AiOutlineLink} from "react-icons/ai";
import {BiBrain} from "react-icons/bi";
import {BsCodeSlash, BsFillMicFill, BsFillPlayFill} from "react-icons/bs";
import {BsPersonBoundingBox} from "react-icons/bs";
import {CgScreen} from "react-icons/cg";
import {FaBookOpen, FaPeopleCarry, FaQuestion} from "react-icons/fa";
import {FiUploadCloud} from "react-icons/fi";
import {GrTest} from "react-icons/gr";
import {ImTwitter} from "react-icons/im";
import {RiOpenArmLine} from "react-icons/ri";
import {VscPaintcan} from "react-icons/vsc";
import {FcIdea} from "react-icons/fc";

import Section from "./Section";

export default function Content() {
  return (
    <>
      <SimpleGrid columns={{base: 1, md: 2}} gap={6} py={4}>
        <Section
          description="Las más comunes de quienes comienzan en Frontend"
          gradientFrom="blue.500"
          gradientTo="blue.300"
          icon={FaQuestion}
          page="faq"
          title="Preguntas frecuentes"
        />
        <Section
          description="HTML, CSS y JavaScript: semantic, CSS flex and grid"
          gradientFrom="blue.500"
          gradientTo="blue.300"
          icon={BsFillPlayFill}
          page="start"
          title="Comienzo"
        />
        <Section
          description="React, Angular, Vue, Svelt, Ember"
          gradientFrom="green.500"
          gradientTo="green.300"
          icon={AiFillTool}
          page="frameworks"
          title="Frameworks"
        />
        <Section
          description="Github, GitLab, Bitbucket"
          gradientFrom="yellow.500"
          gradientTo="yellow.300"
          icon={FiUploadCloud}
          page="repositories"
          title="Repositorios"
        />
        <Section
          description="Figma, mobbin.design, dribble.com"
          gradientFrom="red.500"
          gradientTo="red.300"
          icon={VscPaintcan}
          page="design"
          title="Diseño UX/UI"
        />
        <Section
          description="jest, react-testing-library, cypress y enzyme"
          gradientFrom="purple.500"
          gradientTo="purple.300"
          icon={GrTest}
          page="testing"
          title="Testing"
        />
        <Section
          description="Platzi, Udemy, CodigoFacilito, EdTeam, Courseit"
          gradientFrom="gray.800"
          gradientTo="gray.600"
          icon={AiOutlineLink}
          page="courses"
          title="Cursos"
        />
        <Section
          description="FrontEndCafe, Escuela Dev Rock, CodeAr"
          gradientFrom="orange.500"
          gradientTo="orange.300"
          icon={FaPeopleCarry}
          page="comunities"
          title="Comunidades"
        />
        <Section
          description="Midudev, GoncyPozzo, EscuelaDevRock y más!"
          gradientFrom="cyan.500"
          gradientTo="cyan.300"
          icon={CgScreen}
          page="channels"
          title="Canales YouTube/Twitch"
        />
        <Section
          description="DevRock, Midudev, WeCodeSign"
          gradientFrom="gray.800"
          gradientTo="gray.600"
          icon={BsFillMicFill}
          page="podcasts"
          title="Podcasts"
        />
        <Section
          description="Para practicar y agregar en Portfolio"
          gradientFrom="teal.500"
          gradientTo="teal.300"
          icon={FcIdea}
          page="projectsexample"
          title="Proyectos de ejemplo"
          isNew
        />
        <Section
          description="W3Schools, Freecodecamp, Developer Mozilla"
          gradientFrom="gray.800"
          gradientTo="gray.600"
          icon={AiOutlineLink}
          page="resources"
          title="Recursos"
        />
        <Section
          description="Codewars, FrontEndMentor, Codepen"
          gradientFrom="teal.500"
          gradientTo="teal.300"
          icon={BsCodeSlash}
          page="practicesites"
          title="Sitios de Práctica"
        />
        <Section
          description="Vercel, Heroku, Netlify, DigitalOcean"
          gradientFrom="blackAlpha.500"
          gradientTo="blackAlpha.300"
          icon={AiOutlineCloudServer}
          page="hostings"
          title="Hostings"
        />
        <Section
          description="Midudev, Victoruxui, Goncy, ..."
          gradientFrom="twitter.500"
          gradientTo="twitter.300"
          icon={ImTwitter}
          page="twitter"
          title="Twitter"
        />
        <Section
          description="Open Source"
          gradientFrom="facebook.500"
          gradientTo="facebook.300"
          icon={RiOpenArmLine}
          page="projects"
          title="Proyectos"
        />
        <Section
          description="CV, carta presentación, LinkedIn ..."
          gradientFrom="facebook.500"
          gradientTo="facebook.300"
          icon={FaBookOpen}
          page="advices"
          title="Consejos Entrevistas"
        />
        <Section
          description="Búsquedas IT"
          gradientFrom="facebook.500"
          gradientTo="facebook.300"
          icon={BsPersonBoundingBox}
          page="jobs"
          title="Empleos"
        />
        <Section
          description="Personas que te ayudan con tus consultas"
          gradientFrom="facebook.500"
          gradientTo="facebook.300"
          icon={BiBrain}
          page="mentoring"
          title="Mentorías"
        />
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
