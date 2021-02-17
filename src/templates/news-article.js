import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link as ReachLink } from 'gatsby'

// Load components
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { HTMLContent } from '../components/Content'
import LayoutCMS from '../components/LayoutCMS/LayoutCMS'
import { Box, Heading, Text, Link } from '@chakra-ui/react'

export const NewsArticleTemplate = ({
  title,
  date,
  img,
  mainContent
}) => {
  
  return (
    <Fragment>
      <Box as="header" textStyle="section" >
        <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
          <Link as={ReachLink} to="/news" display="inline-block" textStyle="p" marginBottom="20px" fontSize="22px">
            Back to all articles
          </Link>
          <Heading as="h1" textStyle="h2" width={{base: "100%", lg:"80%"}} marginBottom={{base: "20px", lg: "0"}}>
          {title}
          </Heading>
          <Text fontSize="18px" marginTop="20px" color="neutral.800">
            {date}
          </Text>
        </Box>
      </Box>
      <Box as="section" textStyle="section" paddingTop="0 !important" backgroundColor="neutral.900">
        <Box textStyle="container">
          <Box marginBottom="50px">
            <PreviewCompatibleImage imageInfo={img} />
          </Box>
          <LayoutCMS data={mainContent} />
        </Box>
      </Box>
    </Fragment>
  )
}

NewsArticleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const NewsArticle = ({ data }) => {
  const { markdownRemark: post } = data
  const { seo } = post.frontmatter
  const title = seo ? seo.title : post.frontmatter.title
  const description = seo ? seo.description : undefined

  return (
    <Layout metaTitle={title} metaDescription={description}>
      <NewsArticleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        mainContent={post.frontmatter.layout}
        img={post.frontmatter.image}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

NewsArticle.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NewsArticle

export const pageQuery = graphql`
  query NewsArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }, frontmatter: {templateKey: {eq: "news-article"}}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        seo {
          title 
          description
        }
        image {
          childImageSharp {
            fluid(maxHeight: 480, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
            }
          }
        }
        layout {
          type
          column {
              title
              text
          }
          full {
            title
            text
          }
          testimonial {
              name
              quote
              alignment
          }
        }
      }
    }
  }
`
