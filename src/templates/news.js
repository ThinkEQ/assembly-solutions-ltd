import React from 'react'

// Load components
import Layout from '../components/Layout'
import { Box, Heading, Text } from '@chakra-ui/react'
import Roll from '../components/Roll/Roll'
import Pagination from '../components/Pagination/Pagination'
import { graphql } from 'gatsby'

export const NewsIndexTemplate = ({ data, pagination }) => {
  return (
         <Layout>
          <Box as="header" textStyle="section" >
            <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
              <Text textStyle="p" marginBottom="20px" fontSize="22px">
                News
              </Text>

              <Heading as="h1" textStyle="h1" width={{base: "100%", lg:"80%"}} marginBottom={{base: "20px", lg: "0"}}>
                We are always up to something new, so keep yourself up to date on all our latest news stories
              </Heading>
            </Box>
          </Box>
          <Box as="section" textStyle="section" minHeight="500px" backgroundColor="neutral.900">
            <Box textStyle="container">
              <Roll title="All articles" data={data} />
              <Box display="flex" justifyContent="flex-end" padding={{base: "0 10px", md: "0 30px"}}>
                <Pagination currentPage={pagination.humanPageNumber} totalPages={pagination.numberOfPages} nextPage={pagination.nextPagePath} />
              </Box>
            </Box>
          </Box>
      </Layout>
  )
}

const NewsIndex =  ({data, pageContext}) => {
  return <NewsIndexTemplate data={data} pagination={pageContext} />
}

export const newsIndexQuery = graphql`
  query NewsIndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
      limit: $limit
      filter: { frontmatter: { templateKey: { eq: "news-article" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxHeight: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`

export default NewsIndex