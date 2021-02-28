import React from 'react'
import Layout from '../components/Layout'
import { Box, Heading, Link } from '@chakra-ui/react'

export default () => (
  <Layout>
    <Box as="header" paddingTop={{base: "100px", lg:"100px"}}>
      <Box textStyle="section">
          <Box textStyle="container">
              <Heading as="h1" textStyle="h2" maxWidth={{base: "100%", xl:"90%"}}  marginBottom="40px">
                Thanks, you're all signed up! <br /><br />You will be the first to hear our latest news.
            </Heading>
          </Box>
      </Box>
    </Box>
  </Layout>
)