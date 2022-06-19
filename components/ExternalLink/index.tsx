import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, Text } from '@chakra-ui/react'

export default function ExternalLink({ href, text }) {
  return (
    <Link isExternal href={href}>
      <Text>
        {text} <ExternalLinkIcon mx="2px" />
      </Text>
    </Link>
  )
}
