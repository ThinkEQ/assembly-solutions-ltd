import React from 'react'
import Layout from '../components/Layout'
import { Box, Heading, Link } from '@chakra-ui/react'

export default () => (
  <Layout>
    <Box as="header" paddingTop={{base: "100px", lg:"100px"}}>
      <Box textStyle="section">
          <Box textStyle="container">
              <Heading as="h1" textStyle="h2" maxWidth={{base: "100%", xl:"90%"}}  marginBottom="40px">
                Thank you for subscribing to our newsletter. To unsubscribe please email <Link textStyle="h2" href="mailto:enquiries@assembly-solutions.com" target="_blank" isExternal>enquiries@assembly-solutions.com</Link>
            </Heading>
          </Box>
      </Box>
    </Box>
  </Layout>
)