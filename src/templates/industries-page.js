import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

// Load components
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import NewsArticle from '../components/StaticQueries/NewsArticles'
import PreviewImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper, toHTML } from '../components/Content'
import Carousel from '../components/Carousel/CustomCarousel'

export const IndustryPageTemplate = ({ title, content, contentComponent, subtitle, imgHeader, testimonial, industries, aside }) => {
  const PageContent = contentComponent || Content
  const [isLessThan464] = useMediaQuery("(max-width: 474px")

  return (
    <Fragment>
      <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
        <Box textStyle="section">
          <Box textStyle="container">
            <Text textStyle="p" marginBottom="20px" fontSize="22px">
                {title}
              </Text>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}}>             
                <Heading as="h1" textStyle="h2" width={{base: "100%", lg:"62%"}} marginBottom="40px">
                    {subtitle}
                </Heading>
              </Box>
              <Box  marginTop={{base: "30px", lg: "0"}}  position="relative">
                <PreviewImage imageInfo={imgHeader} />
              </Box>
          </Box>
        </Box>
      </Box>

      <Box as="section" textStyle="section">
        <Box display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}} alignContent="flex-start" textStyle="container">
          <Box width={{base: "100%", lg:"48%"}} marginBottom={{base: "25px", lg: "0"}}>
            <MDXWrapper>
              <PageContent content={content} />
            </MDXWrapper>
          </Box>
          <Box width={{base: "100%", lg:"48%"}}>
            <Box backgroundColor="blue.900" padding="8">
              <Text textStyle="p" color="#fff">
                {testimonial.quote}
              </Text>
              <Text textStyle="p" marginTop="20px" color="#fff">
                {testimonial.name}
              </Text>
            </Box>
            <Box mt="20px">
              <MDXWrapper>
                  <PageContent content={toHTML(aside)} />
              </MDXWrapper>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box as="section" width="100%" maxHeight="700px" margin={{base:"30px 0", lg: "50px 0"}}>
        <Carousel
        arrows={false}
        centerMode={isLessThan464 ? false : true}
        partialVisible={isLessThan464 ? true : false}
        >
          {industries.map((item) => {
            return (
                <Box padding="0 5px" margin="0 10px" overflow="hidden" height={{base: "300px", md: "400px"}} cursor="grab" _active={{cursor: "grabbing"}} position="relative">
                  <Box position="absolute" pointerEvents="none" height="100%" width="100%" zIndex="10" borderRadius="3px" top="0" left="5px" background="rgba(9,21,64,0.5)" />
                  <Box overflow="hidden" height="100%" width="105%" transform="scale(1.1)" transformOrigin="0 0" filter="brightness(100%)" background="rgba(9,21,64,0.5)" transition=".6s ease-in-out" _hover={{transform: "scale(1)", filter:"brightness(50%)"}}>
                    <PreviewImage pointerEvents="none" imageInfo={item.image} borderRadius="3px" height="100%" width="100%"/>
                  </Box>
                  <Text pointerEvents="none" fontSize={{base: "24px", md: "34px", lg:"44px"}} color="#fff" zIndex="20" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    {item.name}
                  </Text>
                </Box>
            )
          })}
        </Carousel>
      </Box>


      <Box as="section" position="relative" width="100%" overflow="hidden">
        <NewsArticle />
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
  const { seo } = post.frontmatter
  const title = seo ? seo.title : post.frontmatter.title
  const description = seo ? seo.description : undefined

  return (
    <Layout metaTitle={title} metaDescription={description} ogUrl={post.frontmatter.og_url} ogImg={post.frontmatter.relativePath}>
      <IndustryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        intro={post.frontmatter.intro}
        industries={post.frontmatter.industries || []}
        testimonial={post.frontmatter.testimonial || {}}
        aside={post.frontmatter.aside || ''}
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
        aside,
        intro,
        seo {
          title
          description
          og_url
        }
        testimonial {
          name,
          quote
        }
        industries {
          name,
          alt
          image {
            childImageSharp {
              fluid(maxHeight: 680, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                presentationHeight
              }
            }
          }
        }
        image {
          relativePath
          childImageSharp {
            fluid(maxHeight: 480, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              presentationHeight
            }
          }
        }
      }
    }
  }
`
