import React, { Fragment } from 'react'

// Load components
import Layout from '../components/Layout'
import { Box, Heading, Text } from '@chakra-ui/react'
import Roll from '../components/Roll/Roll'
import Pagination from '../components/Pagination/Pagination'
import { graphql } from 'gatsby'

export const NewsIndexTemplate = ({ data, pagination }) => {
  return (
         <Fragment>
          <Box as="header" textStyle="section" >
            <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
              <Text textStyle="p" marginBottom="20px" fontSize="22px">
                News
              </Text>

              <Heading as="h1" textStyle="h2" width={{base: "100%", lg:"80%"}} marginBottom={{base: "20px", lg: "0"}}>
                We are always up to something new, so keep yourself up to date on all our latest news stories
              </Heading>
            </Box>
          </Box>
          <Box as="section" textStyle="section" minHeight="500px" backgroundColor="neutral.900">
            <Box textStyle="container">
              <Roll title="All articles" data={data} />
              {pagination.numberOfPages > 1 &&
                <Box display="flex" justifyContent="flex-end" padding={{base: "0 10px", md: "0 30px"}}>
                  <Pagination currentPage={pagination.humanPageNumber} totalPages={pagination.numberOfPages} nextPage={pagination.nextPagePath} />
                </Box>}
            </Box>
          </Box>
      </Fragment>
  )
}

const NewsIndex =  ({data, pageContext}) => { 
  return (
    <Layout metaTitle="News and Articles | Assembly Solutions Ltd" metaDescription="News and articles from Assembly Solutions Ltd. Contact us on 01204 521999 for more information." ogUrl="https://www.assembly-solutions.com/news" >
      <NewsIndexTemplate data={data} pagination={pageContext} />
    </Layout>
  )
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
            seo {
              title 
              description
            }
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxHeight: 600, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
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