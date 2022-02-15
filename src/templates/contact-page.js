import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Load components
import Content, { HTMLContent } from '../components/Content'
import { Box, Text, Heading, Link, FormErrorMessage, FormLabel, FormControl, Input, Textarea } from '@chakra-ui/react'
import Button from '../theme/button'
import { Field } from 'formik'
import FormProvider from '../components/Form/Form'
import GMap from '../components/Map/Map'

// Load layout
import Layout from '../components/Layout'

const ContactForm = ({ isSubmitting }) => {
  return (
    <Box spacing="4" display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}} flexWrap={{base: "nowrap", lg: "wrap" }}>
    <Field name="fullName">
      {({ field, form }) => (
        <FormControl id="fullName" color="#fff" width={{base: "100%", lg:"48%"}} isInvalid={form.errors.fullName && form.touched.fullName} marginBottom="6">
          <FormLabel fontSize="18px" htmlFor="fullName" fontWeight="bold">Full name</FormLabel>
          <Input {...field} id="fullName" name="fullName" type="text" focusBorderColor="green.900" size="lg" height="67px" display="inline-block" />
          <FormErrorMessage>{form.errors.fullName}</FormErrorMessage>
        </FormControl>
      )}
      </Field>
      <Field name="company">
      {({ field, form }) => (
        <FormControl color="#fff" id="company" width={{base: "100%", lg:"48%"}} isInvalid={form.errors.company && form.touched.company} marginBottom="6">
          <FormLabel htmlFor="company" fontSize="18px" fontWeight="bold">Company</FormLabel>
          <Input {...field} id="company" name="company" type="text" focusBorderColor="green.900" size="lg" height="67px" display="inline-block" />
          <FormErrorMessage>{form.errors.company}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Field name="telephone">
      {({ field, form }) => (
        <FormControl id="telephone" color="#fff" width={{base: "100%", lg:"48%"}} marginBottom="6" isInvalid={form.errors.telephone && form.touched.telephone}>
          <FormLabel htmlFor="telephone" fontSize="18px" fontWeight="bold">Telephone number</FormLabel>
          <Input {...field} id="telephone" name="telephone" type="tel" focusBorderColor="green.900" size="lg" height="67px" display="inline-block" />
          <FormErrorMessage>{form.errors.telephone}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Field name="email">
      {({ field, form }) => (
        <FormControl id="eamil" color="#fff" width={{base: "100%", lg:"48%"}} isInvalid={form.errors.email && form.touched.email} marginBottom="6">
          <FormLabel htmlFor="email" fontSize="18px" fontWeight="bold">Email address</FormLabel>
          <Input {...field} id="email" name="email" focusBorderColor="green.900" type="email" size="lg" height="67px" display="inline-block" />
          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Field name="enquiry" >
      {({ field, form }) => (
        <FormControl id="enquiry" color="#fff" isInvalid={form.errors.enquiry && form.touched.enquiry}>
          <FormLabel fontSize="18px" htmlFor="enquiry" fontWeight="bold">Enquiry</FormLabel>
          <Textarea {...field} name="enquiry" focusBorderColor="green.900" size="lg" minH="250px" color="#fff" />
          <FormErrorMessage>{form.errors.enquiry}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Box display="flex" justifyContent="flex-end" width="100%" padding="10px 0" paddingBottom={{base: "100px", md: "10px"}}>
      <Button type="submit" variant="solid" isLoading={isSubmitting} loadingText="Submitting"  width={{base: "100%", lg: "300px"}}>Submit</Button>
    </Box>
  </Box>
  )
}

const ContactPageTemplate = ({ title, content, contentComponent, subtitle, imgSrc }) => {
  const PageContent = contentComponent || Content

  function ga() {
            
    if (typeof window === 'undefined') {
      return
    }


   return window.gtag("event", "click", { eventCategory: 'Email', eventLabel: "mailto"})
  }
  
  return (
    <Fragment>
      <Box as="header" textStyle="section">
        <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
          <Text textStyle="p" marginBottom="20px" fontSize="22px">
              {title}
            </Text>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}}>
              <Heading as="h1" textStyle="h2" width={{base: "100%", lg:"62%"}} marginBottom={{base: "20px", lg: "0"}}>
                  {subtitle}
              </Heading>
              {/* <Text textStyle="p" width={{base: "100%", lg:"35%"}}>
                  {intro}
              </Text> */}
            </Box>
            <Box backgroundColor="blue.800" p={8} borderRadius="sm" mt={8}>
                  <Box display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}}>
                    <Box color="#fff">
                      <Heading textStyle="h2" as="h2" color="#fff">
                        Contact us
                      </Heading>
                      <Link as="a" href="tel:01204521999" fontSize="26px" display="inline-block" fontWeight="bold" lineHeight="31px" margin="15px 0">
                        T: 01204 521999
                      </Link>
                      <Link as="a" href="mailto:enquiry@assembly-solutions.com" onClick={ga} target="_blank" fontSize="26px" fontWeight="bold" lineHeight="31px">
                        E: Enquiry@assembly-solutions.com
                      </Link>
                      <Text  fontSize="26px" fontWeight="bold" lineHeight="31px" marginTop="50px" marginBottom="15px">
                        Where we are
                      </Text>
                      <Text textStyle="p" fontSize="16px !important" lineHeight="28px !important" marginBottom="0">
                        Assembly Solutions Ltd
                      </Text>
                      <Text textStyle="p" fontSize="16px !important" lineHeight="28px !important" marginBottom="0">
                       Terence House
                      </Text>
                      <Text textStyle="p" fontSize="16px !important" lineHeight="28px !important" marginBottom="0">
                        Nile Street
                      </Text>
                      <Text textStyle="p" fontSize="16px !important" lineHeight="28px !important" marginBottom="0">
                        Bolton
                      </Text>
                      <Text textStyle="p" fontSize="16px !important" lineHeight="28px !important" marginBottom="0">
                        Greater Manchester
                      </Text>
                      <Text textStyle="p" fontSize="16px !important" lineHeight="28px !important" marginBottom="0">
                        BL3 6BW UK
                      </Text>
                    </Box>
                    <Box display="flex" maxHeight="550px" height={{base: "auto", lg:"500px"}}  marginTop="20px" width={{base: "100%", lg:"60%"}} alignItems="center" >
                      <GMap />
                    </Box>
                  </Box> 
                  <Box marginTop="30px">
                    <FormProvider url="/contact/thanks" formName="contact" initialValues={{fullName: "", company: "", telephone: "", email: "", enquiry: ""}} setRules={['fullName', 'company', 'enquiry', 'telephone']}>
                      <ContactForm  />
                    </FormProvider>
                  </Box>
            </Box>
        </Box>
      </Box>
    </Fragment>
   
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ 
  data }) => {
  const { markdownRemark: post } = data
  const { seo: { title, description, og_url } } = post.frontmatter
  return (
    <Layout metaTitle={title || post.frontmatter.title} metaDescription={description} ogUrl={og_url}>
       
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        intro={post.frontmatter.intro}
        content={post.html}
      />
      
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title,
        subtitle,
        intro
        seo {
          title
          description
          og_url
        }
      }
    }
  }
`
export default ContactPage