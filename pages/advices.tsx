import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, Link, Text } from '@chakra-ui/react'

import PageTitle from 'components/PageTitle'
import Page from './Page'

export default function Jobs() {
  function Title({ text }) {
    return (
      <Text fontSize="xl" fontWeight="bold" color="green.400">
        {text}
      </Text>
    )
  }

  return (
    <Page>
      <PageTitle title="Consejos Entrevistas" />

      <Grid gap={4} mt={4} pb={6}>
        <Title text="Primer contacto:" />
        <Text>
          Escribir una buena carta de presentación resumida y cordial para
          enviar ya sea por e-mail o mensaje privado. Enviar adjunto el CV en
          formato PDF o PNG y recordar que sea de una sola página. Pueden ver
          ejemplos de CV en:
          https://www.canva.com/es_ar/curriculum-vitae/plantillas/
        </Text>
        <Title text="Verificaciones antes de entrevista:" />
        <Text>
          Probar en una meet propia que funcione y se vea bien la cámara, que se
          escuche bien el micrófono sin ruidos de fondo, intentar utilizar
          auriculares para que no haya retorno y escuchen bien, cerrar todos los
          programas para que no haya notificaciones ni distracciones, verificar
          que funcione bien Internet. Poner en modo silencio el celular y
          alejarlo para concentrarnos 100% en la entrevista.
        </Text>
        <Title text="Ser puntual:" />
        <Text>
          Si ves que vas a llegar tarde o no vas a poder asistir a la
          entrevista, avisar con todo el tiempo de antelación posible.
        </Text>
        <Title text="Coordialidad:" />
        <Text>
          Buenos días, buenas tardes, ¿cómo estás?, estoy bien, gracias, perdón,
          disculpame, no hay problema; son todas palabras que parecen simples
          pero es importante que se usen. La coordialidad, el respeto y muchas
          otras habilidades blandas (soft skills) son importantes demostrarlas
          desde el primer momento. Inclusive desde el momento que nos
          contactamos por e-mail o mensaje privado con el entrevistador/a.
        </Text>
        <Title text="No mentir:" />
        <Text>
          La idea es que seas sincero/a y cuentes tus experiencias reales, tus
          capacitaciones y por que te gusta la programación!
        </Text>
        <Title text="Modular:" />
        <Text>
          Antes puedes practicar hablar delante de un espejo (sí, sirve) así te
          escuchas a vos mismo/a y entrás en calor vocalmente. Hablar con
          tranquilidad, sin apuro.
        </Text>
        <Title text="No hablar mucho:" />
        <Text>
          Puedes hablar lo que quieras pero cuando te hagan preguntas concretas,
          intentá no extenderte demasiado ni irte por las ramas.
        </Text>
        <Title text="Averiguar sobre la empresa:" />
        <Text>
          Averiguar sobre la empresa: Si se postulan a un lugar está bueno
          entrar a su sitio web, a su LinkedIn, buscar en redes como Twitter y
          demás para tener información de a qué se dedican, cuánta gente son,
          etc. Así en la entrevista podés consultar sobre esas cosas,
          mencionarlo o cuándo te preguntan si conocés la empresa le decís que
          estuviste buscando información y le comentás todo lo que viste.
        </Text>
        <Title text="Consultar sobre Beneficios:" />
        <Text>
          Como obra social, días extra de vacaciones, etc.: Podés preguntar para
          saber si los beneficios te interesan, a ver si hay alguno que no
          comprendés o lo que sea.
        </Text>
        <Title text="Consultar sobre el equipo de trabajo:" />
        <Text>
          Demostrar interés para saber con qué equipo vas a trabajar. Está bueno
          saber si vas a tener líderes, cuántos compañeros/as, etc.
        </Text>
        <Title text="Sueldo:" />
        <Text>
          Saber cuánto desean cobrar en BRUTO (el que figura en recibo de sueldo
          sin retenciones): Se suele preguntar para saber si sos un posible
          candidato factible, ya que si pedís mucho es probable que no te tengan
          en cuenta.
        </Text>
        <Title text="Trabajar para el exterior:" />
        <Text>
          Consultar y/o que expliquen la forma o método de pago en dólares y/o
          pesos.
        </Text>
        <Title text="¡APLICA!" />
        <Text>
          Por último, y no menos importante, no te sientas mal si no quedaste en
          una entrevista, ¡aplica a muchas! La experiencia de hacer muchas
          entrevistas te ayuda a ir mejorando maneras y formas de hablar, que
          decir y que no volver a repetir.
        </Text>

        <Link isExternal href="https://www.youtube.com/watch?v=_g2kemGO5tY">
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Más detalles y comentarios en video de @martinacostadev{' '}
            <ExternalLinkIcon mx="2px" />
          </Text>
        </Link>
      </Grid>
    </Page>
  )
}
