import Head from 'next/head'
import { Box, Button, Heading, useColorMode } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading as='h1' size='4xl'>College Finder</Heading>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </main>
    </>
  )
}

export default IndexPage
