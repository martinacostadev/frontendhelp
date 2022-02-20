import {Container, Box, Text, List, ListItem, ListIcon} from "@chakra-ui/react";
import React from "react";
import {MdCheckCircle} from "react-icons/md";

import PageTitle from "../components/PageTitle";

export default function productivity() {
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
        bgGradient="linear(to-tr, gray.300, gray.50)"
        borderRadius={12}
        boxShadow="dark-lg"
        my={4}
        px={8}
        py={4}
      >
        <PageTitle title="Productividad" />

        <Box my={6}>
          <Text fontSize="lg" fontWeight="bold">
            Consejos para una mayor productividad
          </Text>
        </Box>

        <Box mt={8}>
          <List spacing={8}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Descansar bien: al menos dormir 7 horas.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Planificar tu día: para saber qué prioridades tenés.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Sin distracciones: alejar el celular y dejarlo en silencio así no nos distraemos con cada notificación y/o evitamos el impulso de agarrar el celular a cada rato para ver si tenemos algún mensaje.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Trabajar en bloques con descansos: Es importante descansar la postura, la vista, la mente. Por ejemplo, se puede utilizar la técnica Pomodoro: [https://blog.trello.com/es/tecnica-pomodoro](https://blog.trello.com/es/tecnica-pomodoro). 
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Ordenar tu lugar de trabajo: una mesa solo con los accesorios necesarios te va a ayudar a tener mayor concentración.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Automatizar tareas: si ves que hacés algo todos los días de forma repetida, intentá automatizar esa tarea así no te quita tiempo.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Dividir grandes tareas: si vemos una gran tarea con muchas instrucciones nos va a parecer abrumadora y difícil de realizar; pero si la dividimos en pequeñas subtareas, vamos a ver cada una de ellas como algo mucho menos complejo y al ir realizando cada una de ellas, nos vamos a ir sintiendo que estamos avanzando.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Buscar tus momentos de mayor concentración: hay gente que es más productiva por la mañana, otras por la tarde y otras por la noche. Intentá identificar cuándo es ese momento del día y utilizar ese espacio para realizar las tareas más complejas, que conllevan mayor concentración así te será más fácil de llevar a cabo.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Pedí ayuda: Si ves que estás trabado/a en algo desde hace mucho tiempo, no dudes en consultar a alguien del equipo para ver si te pueden ayudar. Es mejor pedir ayuda y hacerlo rápido, que estar mucho tiempo sin avanzar :)
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
}
