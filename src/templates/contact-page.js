import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link as ReachLink } from 'gatsby'

// Load components
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import { Box, Text, Heading, Link } from '@chakra-ui/react'
import NewsArticle from '../components/StaticQueries/NewsArticles'
import CarouselWhatWeDo from '../components/Carousel/CarouselWhatWeDo'
import Button from '../theme/button'

// Load layout
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
const ContactPageTemplate = ({ title, content, contentComponent, subtitle, imgSrc }) => {
  const PageContent = contentComponent || Content
  
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