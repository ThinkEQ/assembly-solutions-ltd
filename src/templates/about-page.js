import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link as ReachLink } from 'gatsby'

// Load components
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import { Box, Text, Heading, Link } from '@chakra-ui/react'
import NewsArticle from '../components/StaticQueries/NewsArticles'
import CarouselWhatWeDo from '../components/Carousel/CarouselWhatWeDo'
import ImageComp from '../components/PreviewCompatibleImage'
import Button from '../theme/button'

// Load layout
import Layout from '../components/Layout'

export const AboutPageTemplate = ({ title, content, contentComponent, subtitle, intro, imgSrc }) => {
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
      <Box as="section" width="100%">
        <ImageComp imageInfo={imgSrc} />
      </Box>
      <Box as="section" textStyle="section">
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}} textStyle="container">
          <Box width={{base: "100%", lg:"100%"}} marginBottom={{base: "20px", lg: "0"}}>
            <MDXWrapper>
              <PageContent content={content} />
            </MDXWrapper>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" marginTop="50px">
          <Button variant="solid" width="100%" maxWidth="327px">
            <Link as={ReachLink} to="/team" textDecoration="none" _hover={{textDecoration: "none"}}>
              Meet the team
            </Link>
          </Button>
        </Box>
      </Box>
      <Box textStyle="section" as="section" minHeight={{base: "600px", lg:"800px"}} position="relative" background="gradient.50">
        <Box textStyle="container" position="relative">
          <CarouselWhatWeDo />
        </Box>
      </Box>
      <Box as="section" position="relative" width="100%" overflow="hidden">
        <NewsArticle />
     </Box>
    </Fragment>
   
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { seo: { title, description } } = post.frontmatter
  return (
    <Layout metaTitle={title || post.frontmatter.title} metaDescription={description} >
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        intro={post.frontmatter.intro}
        content={post.html}
        imgSrc={post.frontmatter.image}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
        }
        image {
          childImageSharp {
            fluid(maxHeight: 600, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
            }
          }
        }
      }
    }
  }
`
