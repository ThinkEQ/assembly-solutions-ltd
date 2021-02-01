import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Load components
import { Box, Heading, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Content, { HTMLContent, MDXWrapper } from '../components/Content'

export const PrivacyPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
   <Fragment>
      <Box as="header" textStyle="section">
        <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
          <Text textStyle="p" marginBottom="20px" fontSize="22px">
              Legal
            </Text> 
            <Heading as="h1" textStyle="h1">
                {title}
            </Heading>
        </Box>
      </Box>
      <Box as="section" textStyle="section">
        <Box textStyle="container">
          <MDXWrapper>
          <PageContent content={content} />
          </MDXWrapper>
        </Box>
      </Box>
   </Fragment>
  )
}

PrivacyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PrivacyPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { seo } = post.frontmatter
  const title = seo ? seo.title : post.frontmatter.title
  const description = seo ? seo.description : undefined

  return (
    <Layout metaTitle={title} metaDescription={description}>
      <PrivacyPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PrivacyPage

export const privacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        seo {
          title
          description
        }
      }
    }
  }
`
