import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


// Load components
import { Box, Heading, Text, Link } from '@chakra-ui/react'
import PreviewImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper } from '../components/Content'

export const IndustryPageTemplate = ({ title, content, contentComponent, subtitle, intro, imgHeader, testimonial, industries }) => {
  const PageContent = contentComponent || Content

  return (
    <Fragment>
      <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
        <Box textStyle="section">
          <Text textStyle="p" marginBottom="20px" fontSize="22px">
              {title}
            </Text>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}}>
              <Heading as="h1" textStyle="h1" width={{base: "100%", lg:"65%"}} marginBottom="40px">
                  {subtitle}
              </Heading>
              <Text textStyle="p" width={{base: "100%", lg:"35%"}}>
                  {intro}
              </Text>
            </Box>
            <PreviewImage imageInfo={imgHeader} />
        </Box>
      </Box>

      <Box as="section" textStyle="section">
        <Box display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}} alignContent="flex-start"> 
          <Box width={{base: "100%", lg:"48%"}}>
            <MDXWrapper>
              <PageContent content={content} />
            </MDXWrapper>
          </Box>
         

          <Box width={{base: "100%", lg:"48%"}}>
            <Box backgroundColor="blue.900" padding="8">
              <Text textStyle="p" color="#fff">
                {testimonial.quote}
              </Text>
              <Text fontSize="16px" marginTop="20px" color="#fff">
                {testimonial.name}
              </Text>
            </Box>
            <Text textStyle="p" marginTop="20px">
              We open our arms and welcome any enquiry no matter what industry you’re in. If you would like to send an enquiry, simply email <Link href="mailto:enquiry@assembly-solutions.com" color="green.900" isExternal>enquiry@assembly-solutions.com</Link> and we will be right back to you.
            </Text>
          </Box>
        </Box>
      
      </Box>
    </Fragment>
  )
}

IndustryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndustryPage = ({ data }) => {
  const { markdownRemark: post } = data
console.log(data, 'data industries')
  return (
    <Layout>
      <IndustryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        intro={post.frontmatter.intro}
        industries={post.frontmatter.industries || []}
        testimonial={post.frontmatter.testimonial || {}}
        content={post.html}
        imgHeader={post.frontmatter.image}
      />
    </Layout>
  )
}

IndustryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndustryPage

export const industryPageQuery = graphql`
  query IndustryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        subtitle,
        intro,
        testimonial {
          name,
          quote
        }
        industries {
          name,
          alt
          image {
            childImageSharp {
              fluid(maxHeight: 680, quality: 80) {
                ...GatsbyImageSharpFluid
                presentationHeight
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxHeight: 680, quality: 80) {
              ...GatsbyImageSharpFluid
              presentationHeight
            }
          }
        }
      }
    }
  }
`
