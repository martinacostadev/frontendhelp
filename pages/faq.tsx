import { Box, Text } from '@chakra-ui/react'

import PageTitle from '../components/PageTitle'

import Page from './Page'

export default function start() {
  return (
    <Page>
      <PageTitle
        description="Preguntas frecuentes FrontEnd"
        title="Preguntas frecuentes 🤔"
      />

      <Text mt={4}>
        Algunas de las preguntas más comunes de quienes inician en Frontend. Las
        respuestas son algunas respuestas propias (@martinacostadev) y otras de
        las que fue leyendo/escuchando alguna vez.
      </Text>

      <Text mt={4}>
        <strong>NO</strong> son la respuesta final, la mejor o la única
        respuesta, vas a encontrar cientos de respuestas según a quién le
        preguntes. Lo importante es que tomes solo lo que te sea útil y el resto
        lo averigues en otro sitio o consultando a otras personas 😁.
      </Text>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Cualquiera puede programar?
        </Text>
        <Text mt={4}>
          Sí, no importa edad ni género. Lo importante es tener ganas de
          resolver problemas y aprender constantemente.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Por dónde empiezo?
        </Text>
        <Text mt={4}>Hay muchas maneras, algunas de ellas:</Text>
        <Text mt={4}>
          Juntarse con alguien que tenga experiencia y te enseñe lo más básico y
          te ayude a comenzar un proyecto pequeño desde cero como una landing
          page o una pequeña aplicación para poder ir entiendo paso a paso como
          crear un proyecto, como escribir, como pensar, como ver resultados y
          demás. Sería algo así como un mentor/coach.
        </Text>
        <Text mt={4}>
          Unirse a una{' '}
          <a href="/comunities">
            <strong>comunidad</strong>
          </a>{' '}
          e intentar encontrar un grupo de estudio o canales para encontrar
          gente que también esté comenzando para ir solucionando los
          inconvenentes entre varios/as.
        </Text>
        <Text mt={4}>
          Buscar algún curso básico en YouTube o alguna plataforma de estudio.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Sirven los Bootcamp?
        </Text>
        <Text mt={4}>
          Los Bootcamps son cursos intensivos, muy intensivos, y en su mayoría
          caros, muy caros. En el menor tiempo posible te quieren enseñar muchas
          cosas y eso a la mayoría le complica porque hay que entregar
          ejercicios y entender a un ritmo muy acelerado que a veces es díficil
          de seguir el ritmo.
        </Text>
        <Text mt={4}>
          Si tenés plata y te sentís capacitado/a a seguir un ritmo acelerado,
          intentá participar de uno.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Cuál es el mejor lenguaje para comenzar?
        </Text>
        <Text mt={4}>
          Por la fácil compresión del código y la sintaxis, los más recomendados
          para comenzar son JavaScript Vainilla o Python. Y después también
          pueden ser C# o Java. Si te gusta lo mobile nativo: Kotlin y/o Swift.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Puedo empezar a programar teniendo más de 25 años?
        </Text>
        <Text mt={4}>
          Sí, no importa la edad y el género. El mundo IT es el mercado laboral
          más demandado del momento y lo seguirá siendo por lo que se está
          necesitando mucha gente. De todas formas, no significa que sea fácil
          encontrar; lo que más suelen buscar es gente con experiencia en el
          lenguaje. Ejemplo: 3+ experiencia con React.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Qué proyectos puedo hacer para mi portfolio?
        </Text>
        <Text mt={4}>
          Landing page, calculadora, lista de tareas, clon de spotify, youtube o
          alguna plataforma, un chat, clima, juego de preguntas.
        </Text>
        <Text mt={4}>
          Lo mejor es hacer algunos pero que estén bien completos, es decir, que
          tengan buenas funcionales y se vean bien estéticamente. Es mejor eso
          antes de tener muchos proyectos poco desarrollados o sin terminar.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Debo saber backend?
        </Text>
        <Text mt={4}>
          No. Si te gusta el Frontend y es a lo que te querés dedicar, podés
          hacerte experto en Front y listo. Es un plus saber backend y hay
          empresas que buscan Full Stack pero no es obligatorio saberlo.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Qué es full stack?
        </Text>
        <Text mt={4}>
          Es dedicarse al Backend y al FrontEnd al mismo tiempo. Hay empresas
          que además de saber ambas te piden conocimientos DevOps (encargados/as
          de implementar, habilitar y/o hacer deploy de los proyectos).
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Qué es una API?
        </Text>
        <Text mt={4}>
          El término API es una abreviatura de Application Programming
          Interfaces, que en español significa interfaz de programación de
          aplicaciones. Se trata de un conjunto de definiciones y protocolos que
          se utiliza para desarrollar e integrar el software de las
          aplicaciones, permitiendo la comunicación entre dos aplicaciones de
          software a través de un conjunto de reglas.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Debo saber testing?
        </Text>
        <Text mt={4}>
          No es obligatorio pero si es un plus debido a que al implementar
          Testing si realizamos cualquier cambio ya sea en algo ya hecho de
          Frontend o si cambian algo desde Backend, se volverían a ejecutar los
          test que corroboren que en la aplicación siguen funcionando todos los
          flujos y/o funciones necesarias.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Cómo busco trabajo?
        </Text>
        <Text mt={4}>
          En Twitter hay muchas ofertas. Acá en FrontEndHelp tenemos una sección{' '}
          <a href="/jobs">
            <strong>Empleos</strong>
          </a>{' '}
          y LinkedIn es una red muy activa también.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Cuál es el lenguaje de programación con más demanda laboral en 2021?
        </Text>
        <Text mt={4}>
          La realidad es que hay demanda hasta en COBOL, un lenguaje de
          programación muy antiguo, ¿por qué? Porque hay muchos sistemas hechos
          en ese lenguaje y hay poca gente que sepa un lenguaje tan antiguo, y
          así pasa con otros lenguajes. De Java también buscan con experiencia.
          En móvil nativo: Swift y Kotlin. En web: React, Angular y Vue. En
          ciencia de datos: Python, R, Scala.
        </Text>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          ¿Puedo aprender varios lenguajes de programación?
        </Text>
        <Text mt={4}>
          Sí, lo importante es que si estás iniciando que no pretendas aprender
          todo junto y no "colapses" aprendiendo varias cosas a la vez. Es
          normal que mucha gente aprenda varios lenguajes pero no profundice en
          ninguno. Es recomendable intentar hacerse mucha experiencia en al
          menos un lenguaje. El resto se va aprendiendo y dependiendo de la
          empresa vas a ir cambiando, o tal vez no, de lenguaje(s).
        </Text>
      </Box>
    </Page>
  )
}
