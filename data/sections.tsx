import { AiFillTool, AiOutlineCloudServer } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'
import { BiBrain } from 'react-icons/bi'
import { BsCodeSlash, BsFillMicFill, BsFillPlayFill } from 'react-icons/bs'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { CgScreen } from 'react-icons/cg'
import { FaBookOpen, FaPeopleCarry, FaQuestion } from 'react-icons/fa'
import { FiUploadCloud } from 'react-icons/fi'
import { BiTestTube } from 'react-icons/bi'
import { ImTwitter } from 'react-icons/im'
import { RiOpenArmLine } from 'react-icons/ri'
import { VscPaintcan } from 'react-icons/vsc'
import { FcIdea } from 'react-icons/fc'
import { GiRoad, GiSkills } from 'react-icons/gi'
import { SiJavascript } from 'react-icons/si'

export const sections = [
  {
    description: 'Las más comunes de quienes comienzan en Frontend',
    gradientFrom: 'blue.500',
    gradientTo: 'blue.300',
    icon: FaQuestion,
    page: 'faq',
    title: 'FAQ',
  },
  {
    description: 'HTML, CSS y JavaScript: semantic, CSS flex and grid',
    gradientFrom: 'blue.500',
    gradientTo: 'blue.300',
    icon: BsFillPlayFill,
    page: 'start',
    title: 'Comienzo',
  },
  {
    description: 'React, Angular, Vue, Svelte, Ember',
    gradientFrom: 'green.500',
    gradientTo: 'green.300',
    icon: AiFillTool,
    page: 'frameworks',
    title: 'Frameworks',
  },
  {
    description: 'Github, GitLab, Bitbucket',
    gradientFrom: 'yellow.500',
    gradientTo: 'yellow.300',
    icon: FiUploadCloud,
    page: 'repositories',
    title: 'Repositorios',
  },
  {
    description: 'Figma, mobbin.design, dribbble.com',
    gradientFrom: 'red.500',
    gradientTo: 'red.300',
    icon: VscPaintcan,
    page: 'design',
    title: 'Diseño UX/UI',
  },
  {
    description: 'jest, react-testing-library, cypress y enzyme',
    gradientFrom: 'purple.500',
    gradientTo: 'purple.300',
    icon: BiTestTube,
    page: 'testing',
    title: 'Testing',
  },
  {
    description: 'Platzi, Udemy, CodigoFacilito, EdTeam, Courseit',
    gradientFrom: 'gray.800',
    gradientTo: 'gray.600',
    icon: AiOutlineLink,
    page: 'courses',
    title: 'Cursos',
  },
  {
    description: 'FrontEndCafe, Escuela Dev Rock, CodeAr',
    gradientFrom: 'orange.500',
    gradientTo: 'orange.300',
    icon: FaPeopleCarry,
    page: 'comunities',
    title: 'Comunidades',
  },
  {
    description: 'Que se usan comúnmente en el día',
    gradientFrom: 'yellow.500',
    gradientTo: 'yellow.500',
    icon: SiJavascript,
    page: 'javascriptconcepts',
    title: 'Conceptos más utilizados en JavaScript',
    isNew: true,
  },
  {
    description: 'Midudev, GoncyPozzo, EscuelaDevRock y más!',
    gradientFrom: 'cyan.500',
    gradientTo: 'cyan.300',
    icon: CgScreen,
    page: 'channels',
    title: 'Canales YouTube/Twitch',
  },
  {
    description: 'Consejos para trabajar mejor',
    gradientFrom: 'teal.500',
    gradientTo: 'teal.300',
    icon: BiBrain,
    page: 'productivity',
    title: 'Productividad',
    isNew: true,
  },
  {
    description: 'DevRock, Midudev, WeCodeSign',
    gradientFrom: 'gray.800',
    gradientTo: 'gray.600',
    icon: BsFillMicFill,
    page: 'podcasts',
    title: 'Podcasts',
  },
  {
    description: 'Para practicar y agregar en Portfolio',
    gradientFrom: 'teal.500',
    gradientTo: 'teal.300',
    icon: FcIdea,
    page: 'projectsexample',
    title: 'Proyectos de ejemplo',
    isNew: true,
  },
  {
    description: 'W3Schools, Freecodecamp, Developer Mozilla',
    gradientFrom: 'gray.800',
    gradientTo: 'gray.600',
    icon: AiOutlineLink,
    page: 'resources',
    title: 'Recursos',
  },
  {
    description: 'Ruta para aprender',
    gradientFrom: 'gray.800',
    gradientTo: 'gray.600',
    icon: GiRoad,
    page: 'roadmap',
    title: 'Roadmap',
    isNew: true,
  },
  {
    description: 'Codewars, FrontEndMentor, Codepen',
    gradientFrom: 'teal.500',
    gradientTo: 'teal.300',
    icon: BsCodeSlash,
    page: 'practicesites',
    title: 'Sitios de Práctica',
  },
  {
    description: 'Vercel, Heroku, Netlify, DigitalOcean',
    gradientFrom: 'blackAlpha.500',
    gradientTo: 'blackAlpha.300',
    icon: AiOutlineCloudServer,
    page: 'hostings',
    title: 'Hostings',
  },
  {
    description: 'Midudev, Victoruxui, Goncy, ...',
    gradientFrom: 'twitter.500',
    gradientTo: 'twitter.300',
    icon: ImTwitter,
    page: 'twitter',
    title: 'Twitter',
  },
  {
    description: 'Open Source',
    gradientFrom: 'facebook.500',
    gradientTo: 'facebook.300',
    icon: RiOpenArmLine,
    page: 'projects',
    title: 'Proyectos',
  },
  {
    description: 'Habilidades blandas',
    gradientFrom: 'facebook.500',
    gradientTo: 'facebook.300',
    icon: GiSkills,
    page: 'softskills',
    title: 'Soft Skills',
    isNew: true,
  },
  {
    description: 'CV, Carta de Presentación, LinkedIn y más!',
    gradientFrom: 'facebook.500',
    gradientTo: 'facebook.300',
    icon: FaBookOpen,
    page: 'advices',
    title: 'Consejos Entrevistas',
  },
  {
    description: 'Búsquedas IT',
    gradientFrom: 'facebook.500',
    gradientTo: 'facebook.300',
    icon: BsPersonBoundingBox,
    page: 'jobs',
    title: 'Empleos',
  },
  {
    description: 'Personas que te ayudan con tus consultas',
    gradientFrom: 'facebook.500',
    gradientTo: 'facebook.300',
    icon: BiBrain,
    page: 'mentoring',
    title: 'Mentorías',
  },
]