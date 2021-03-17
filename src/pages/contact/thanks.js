import React from 'react'
import Layout from '../../components/Layout'
import { Box, Heading } from '@chakra-ui/react'

export default () => (
  <Layout>
    <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
      <Box textStyle="section">
          <Box textStyle="container">
              <Heading as="h2" textStyle="h2" maxWidth={{base: "100%", xl:"90%"}}  marginBottom="40px">
               Thank you for your enquiry!
               <br /><br />
               Our sales team are reviewing your information and will be in touch with you shortly.
               <br /><br />
               We look forward to working with you!
            </Heading>
          </Box>
      </Box>
    </Box>
  </Layout>
)
