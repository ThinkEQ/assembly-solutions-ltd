import React, { Fragment } from 'react'

// Load components
import Layout from '../components/Layout'
import { Box, Heading, Text } from '@chakra-ui/react'
import Roll from '../components/Roll/Roll'
import Pagination from '../components/Pagination/Pagination'
import { graphql } from 'gatsby'

export const ProjectIndexTemplate = ({ data, pagination }) => {
  return (
         <Fragment>
          <Box as="header" textStyle="section" >
            <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
              <Text textStyle="p" marginBottom="20px" fontSize="22px">
                Projects
              </Text>

              <Heading as="h1" textStyle="h2" width={{base: "100%", lg:"80%"}} marginBottom={{base: "20px", lg: "0"}}>
                Have a browse through the diverse range of Projects that we have recently enjoyed working on
              </Heading>
            </Box>
          </Box>
          <Box as="section" textStyle="section" minHeight="500px" backgroundColor="neutral.900">
            <Box textStyle="container">
              <Roll title="All projects" data={data} />
              {pagination.numberOfPages > 1 && 
                <Box display="flex" justifyContent="flex-end" padding={{base: "0 10px", md: "0 30px"}}>
                  <Pagination currentPage={pagination.humanPageNumber} totalPages={pagination.numberOfPages} nextPage={pagination.nextPagePath} />
                </Box>}
            </Box>
          </Box>
      </Fragment>
  )
}

const ProjectIndex =  ({data, pageContext}) => {
  return (
      <Layout  metaTitle="Customer Projects | Assembly Solutions Ltd" metaDescription="Project Case Studies from Assembly Solutions Ltd. Learn more about what we can do for your business today!" ogUrl="https://www.assembly-solutions.com/projects">
        <ProjectIndexTemplate data={data} pagination={pageContext} />
      </Layout>
    )
}

export const projectIndexQuery = graphql`
  query ProjectIndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
      limit: $limit
      filter: { frontmatter: { templateKey: { eq: "project-article" } } }
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

export default ProjectIndex