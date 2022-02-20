import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Container, Box, Text, Link, Grid, Code, Stack, Image} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import PageTitle from "../components/PageTitle";

export default function javascriptconcepts() {
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
        <PageTitle title="Conceptos JavaScript" />

        <Box my={8}>
          <Text fontSize="lg" fontWeight="bold">
            Comúnmente utilizados en el día a día.
          </Text>
        </Box>

        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            Operador condicional (ternario)
          </Text>

          <Text mt={4} mb={2} fontWeight="bold">
            Else / if tradicional:
          </Text>
          
          <Image
            alt="If / Else"
            src="img/javascriptconcepts/ifelse.png"
            w={400}
          />

          <Text mt={4} mb={2} fontWeight="bold">
            Ternario, más fácil de leer 😍
          </Text>

          <Image
            alt="Ternario JavaScript"
            src="img/javascriptconcepts/ternario.png"
            w={400}
          />
          
          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Sintaxis Spread
          </Text>

          <Text mt={4} mb={4}>
            La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena, ser expandido en lugares donde cero o más argumentos (para llamadas de  función) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.
          </Text>

          <Text mb={4} fontWeight="bold">
            Ejemplo:
          </Text>

          <Image
            alt="Sintaxis Spread"
            src="img/javascriptconcepts/spread.png"
            w={400}
          />

          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Nullish coalescing operator
          </Text>

          <Link isExternal href="https://es.javascript.info/nullish-coalescing-operator" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa comparando ?? con el operador OR (||): <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Text mb={4} fontWeight="bold">
            Ejemplo:
          </Text>

          <Image
            alt="Nullish coalescing operator"
            src="img/javascriptconcepts/NullishCoalescing.png"
            w={400}
          />

          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Optional chaining
          </Text>

          <Link isExternal href="https://es.javascript.info/optional-chaining" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en JavaScript Info: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Text mb={4} fontWeight="bold">
            Ejemplo:
          </Text>

          <Image
            alt="Optional chaining"
            src="img/javascriptconcepts/OptionalChaining.png"
            w={400}
          />

          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Convertir a Number o String
          </Text>

          <Text mb={4} mt={4} fontWeight="bold">
            Ejemplos:
          </Text>

          <Image
            alt="Convertir a Number o String"
            src="img/javascriptconcepts/converToStringOrNumber.png"
            w={400}
          />


          <Text fontSize="xl" fontWeight="bold" mt={14}>
            ¿Qué es un objeto?
          </Text>

          <Link isExternal href="https://es.javascript.info/object" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en JavaScript Info: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          
          <Text mb={4} mt={4} fontWeight="bold">
            Ejemplo:
          </Text>

          <Image
            alt="Objecto"
            src="img/javascriptconcepts/object.png"
            w={400}
          />


          <Text fontSize="xl" fontWeight="bold" mt={14}>
            ¿Qué es un array?
          </Text>

          <Link isExternal href="https://es.javascript.info/array" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en JavaScript Info: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          
          <Text mb={4} mt={4} fontWeight="bold">
            Ejemplo:
          </Text>

          <Image
            alt="Array"
            src="img/javascriptconcepts/array.png"
            w={400}
          />

          <Text fontSize="xl" fontWeight="bold" mt={14}>
            ¿Qué es un array?
          </Text>

          <Link isExternal href="https://es.javascript.info/array" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en JavaScript Info: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          
          <Text mb={4} mt={4} fontWeight="bold">
            Ejemplo:
          </Text>

          <Image
            alt="Array"
            src="img/javascriptconcepts/array.png"
            w={400}
          />


          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Métodos array
          </Text>

          <Link isExternal href="https://www.w3schools.com/jsref/jsref_obj_array.asp" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en W3 Schools: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          
          <Text fontSize="xl" fontWeight="bold" mt={14}>
           Función flecha
          </Text>

          <Link isExternal href="https://es.javascript.info/arrow-functions-basics" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en JavaScript Info: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
            
          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Template strings
          </Text>

          <Link isExternal href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en Develop Mozilla: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Text mb={4} mt={4} fontWeight="bold">
            Ejemplo:
          </Text>

          <Image
            alt="Template String"
            src="img/javascriptconcepts/templateStrings.png"
            w={400}
          />

          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Try/Catch
          </Text>

          <Link isExternal href="https://es.javascript.info/try-catch" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en JavaScript Info: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Promesas
          </Text>

          <Link isExternal href="https://es.javascript.info/promise-basics" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en JavaScript Info: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
            
          <Text fontSize="xl" fontWeight="bold" mt={14}>
            Desestructucar / Desestructuración de objetos
          </Text>

          <Link isExternal href="https://es.javascript.info/destructuring-assignment" >
            <Text fontWeight="bold" mt={4} mb={4}>
              Explicación completa en JavaScript Info: <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>

        </Box>
      </Container>
    </Box>
  );
}
