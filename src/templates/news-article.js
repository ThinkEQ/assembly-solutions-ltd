import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link as ReachLink } from 'gatsby'

// Load components
import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial/Testimonial'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import { Box, Heading, Text, Link } from '@chakra-ui/react'

export const NewsArticleTemplate = ({
  content,
  contentComponent,
  title,
  date,
  img,
  testimonial
}) => {
  const CMSContent = contentComponent || Content
  
  return (
    <Fragment>
      <Box as="header" textStyle="section" >
        <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
          <Link as={ReachLink} to="/news" display="inline-block" textStyle="p" marginBottom="20px" fontSize="22px">
            Back to all articles
          </Link>
          <Heading as="h1" textStyle="h1" width={{base: "100%", lg:"80%"}} marginBottom={{base: "20px", lg: "0"}}>
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
          <MDXWrapper>
            <Box display="flex" flexDirection={{base: "column", lg: "row"}} alignItems="flex-start" justifyContent="space-between">
              <Box width={{base:"100%", lg: "45%"}}>
               <CMSContent content={content} />  
              </Box>
              {testimonial &&
                <Box width={{base:"100%", lg: "45%"}} marginTop={{base: "20px", lg: "0"}}>
                <Testimonial author={testimonial.name} quote={testimonial.quote} />
              </Box>
              }  
            </Box>
          </MDXWrapper>
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

  return (
    <Layout>
      <NewsArticleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        testimonial={post.frontmatter.testimonial}
        img={post.frontmatter.image}
        date={post.frontmatter.date}
        testimonial={post.frontmatter.testimonial}
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
        image {
          childImageSharp {
            fluid(maxHeight: 480, quality: 80) {
              ...GatsbyImageSharpFluid
              presentationHeight
            }
          }
        }
        testimonial {
          quote
          name
        }
      }
    }
  }
`
