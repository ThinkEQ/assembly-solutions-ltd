import React from 'react'
import Layout from '../../components/Layout'
import { Box, Heading, Text } from '@chakra-ui/react'

export default () => (
  <Layout>
    <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
      <Box textStyle="section">
          <Box textStyle="container">
              <Text textStyle="p" marginBottom="20px" fontWeight="bold" fontSize="22px">
                Thank you
              </Text>
              <Heading as="h2" textStyle="h2" maxWidth={{base: "100%", xl:"90%"}}  marginBottom="40px">
               Thank you for your message, one of our team will be in touch shortly to follow up. If you need
               to speak to us sooner please call us on <br/>01204 52199
            </Heading>
          </Box>
      </Box>
    </Box>
  </Layout>
)
