import React from "react";
import {Container, Box, Text, Grid, Flex, Stack, Heading, Link} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

import PageTitle from "../components/PageTitle";

import {FcIdea} from "react-icons/fc";
import {CgDice3} from "react-icons/cg";
import {AiOutlineShopping} from "react-icons/ai";
import {AiOutlinePicture} from "react-icons/ai";
import {AiOutlineBank} from "react-icons/ai";
import {BsListCheck} from "react-icons/bs";
import {AiOutlineDatabase} from "react-icons/ai";

export default function Podcasts() {
  function Feature({ icon, title, desc, desc2 = '', desc3 = '', desc4 = '', ...rest }) {
    return (
      <Box p={4} shadow='md' borderWidth='1px' borderRadius={8} {...rest}>
        <Flex align='center'>
          {icon}
          <Heading fontSize='xl' ml={2}>{title}</Heading>
        </Flex>
        <Text mt={4}>{desc}</Text>
        {desc2 && <Text mt={4}>{desc2}</Text>}
        {desc3 && <Text mt={4}>{desc3}</Text>}
        {desc4 && <Text mt={4}>{desc4}</Text>}
      </Box>
    )
  }

  return (
    <Box
      backgroundAttachment="fixed"
      backgroundImage="url('../static/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      py={4}
      w="100%"
    >
      <Container
        bgColor="background"
        borderRadius={12}
        boxShadow="dark-lg"
        my={4}
        px={8}
        py={4}
      >
        <PageTitle title="Proyectos de ejemplo" />

        <Grid gap={4} mt={6}>
          <Flex mb={4}>
            <FcIdea /> <Text ml={2}>Ideas de proyectos para practicar/portfolio.</Text>
          </Flex>

          <Text mb={2}>
          La idea es que experimentes:
          </Text>
          <Text>
          ✅ Maquetado y ser detallista en esto para que quede prolijo y lindo.
          </Text>
          <Text>
          ✅ Hacer pequeñas y simples animaciones.
          </Text>
          <Text>
          ✅ Prestar atención al contraste de colores entre los fondos y el color de fuente/letra.
          </Text>
          <Text>
          ✅ Interactuar con una API.
          </Text>
          <Text>
          ✅ Organizar tu proyecto por carpetas y archivos prolijos.
          </Text>
          <Text>
          ✅ Crear, editar y eliminar registros.
          </Text>
          <Text>
          ✅ Búsquedas y filtros.
          </Text>

          <Text mt={4} mb={2}>
            Recomendación: prestale atención a la <Text as='mark'>UI (User Interface / Interfaz de Usuario) y UX (User Experience / Experiencia de Usuario)</Text>, por lo que <Text as='u'>es importante que el proyecto sea intuitivo, fácil de usar, de entender y demás</Text>.
          </Text>

          <Text mb={2}>
            Podés sacar inspiración de muchos sitios para imitar el diseño UI/UX. Algunos sitios:
          </Text>

          <Flex flexDirection='column' mb={8}>
            <Link href='https://dribbble.com/' isExternal mb={2}>
              Dribbble <ExternalLinkIcon mx='2px' />
            </Link>
            <Link href='https://www.figma.com/community/web_design' isExternal mb={2}>
              Figma Community <ExternalLinkIcon mx='2px' />
            </Link>
            <Link href='https://mobbin.design/' isExternal mb={2}>
              mobbin.design (Responsive Mobile) <ExternalLinkIcon mx='2px' />
            </Link>
            <Link href='https://www.behance.net/search/projects?search=paginas%20web&tracking_source=typeahead_search_suggestion' isExternal mb={2}>
              Behance <ExternalLinkIcon mx='2px' />
            </Link>
          </Flex>

          <Stack spacing={8}>
            <Feature
              icon={<CgDice3 />}
              title='Juego de preguntas y respuestas'
              desc='- Que el usuario le aparezca una pregunta y tenga al menos 2 opciones para elegir, si selecciona la correcta que se marque en verde sino en rojo y se marque en verde la correcta.'
              desc2='- Al finalizar todas las preguntas va a ver total de aciertos.'
            />
            <Feature
              icon={<AiOutlineShopping />}
              title='Carro de compras sin backend'
              desc='- Crear /product/data.json que sea un export const products de un array de objetos que cada uno es un producto.'
              desc2='- Simular pago con número de tarjeta.'
              desc3='- Que todo tenga un diseño simple pero lindo. Buscar ejemplos de otras tiendas.'
            />
            <Feature
              icon={<AiOutlinePicture />}
              title='Galería de imágenes'
              desc='- Que la versión web se vean muchas filas y columnas pero en mobile sea vea una sola columna con una imagen debajo de otra.'
              desc2='- Usar lazy loading de imágenes.'
              desc3='- Al hacer clic en una imagen que se abra en pantalla completa estilo modal.'
            />
            <Feature
              icon={<AiOutlineBank />}
              title='Home de un Banco (Home Banking)'
              desc='- Que se muestren datos principales de un usuario como saldo, resumen tarjetas (con un diseño de una tarjeta de crédito/débito).'
              desc2='- Que pueda haber una pantalla para invertir como por ejemplo plazo fijo.'
              desc3='- Y lo que se te ocurra :). No es necesario hacer todas las funcionalidades de un banco, solo algunas.'
            />
            <Feature
              icon={<BsListCheck />}
              title='TO-DO List'
              desc='- Input para agregar nueva tarea y botón para agregarla. Si el usuario termina de escribir y presiona enter, que se agregue.'
              desc2='- Listado de tareas y que al tocarla se puede marcar como Finalizada.'
              desc3='- Filtro por tareas Pendientes y Finalizadas.'
            />
            <Feature
              icon={<AiOutlineDatabase />}
              title='Consumir API'
              desc='API Públicas: https://github.com/public-apis/public-apis'
              desc2='- Una web que tenga un login (el Backend lo podés simular), que al ir a la página principal te muestre los datos de una API.'
              desc3='- Arriba en el medio un buscador para poder filtrar por la API.'
              desc4='- Algún botón para agregar filtros típicas como "Ordenar Ascedente/Descendente" o cualquier otro que se te ocurra.'
            />
            <Feature
              icon={<AiOutlineDatabase />}
              title='Login'
              desc='- Hacer un diseño minimalista pero que sea vea muy bien (buscar ejemplos) y sea funcional.'
              desc2='- Validar que sea un e-mail válido, validar que la contraseña tenga mayúsculas y números o muestre error en rojo.'
              desc3='- Al ingresar los datos correctos que rediriga a una página de éxito (success). Se puede simular el Backend validando con javascript puro, ejemplo: if (email === "martin@gmail.com" && password = "Test2021").'
            />
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
