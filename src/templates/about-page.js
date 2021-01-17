import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link as ReachLink } from 'gatsby'

// Load components
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import { BsCircleFill } from 'react-icons/bs'
import { Box, Text, Heading, List, ListItem, ListIcon, Link } from '@chakra-ui/react'
import CarouselNews from '../components/Carousel/CarouselNews'
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
              <Heading as="h1" textStyle="h1" width={{base: "100%", lg:"65%"}} marginBottom={{base: "20px", lg: "0"}}>
                  {subtitle}
              </Heading>
              <Text textStyle="p" width={{base: "100%", lg:"35%"}}>
                  {intro}
              </Text>
            </Box>
        </Box>
      </Box>
      <Box as="section" width="100%">
        <ImageComp imageInfo={imgSrc} />
      </Box>
      <Box as="section" textStyle="section">
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}} textStyle="container">
          <Box width={{base: "100%", lg:"48%"}} marginBottom={{base: "20px", lg: "0"}}>
            <MDXWrapper>
              <PageContent content={content} />
            </MDXWrapper>
          </Box>
          <Box width={{base: "100%", lg:"48%"}}>
            <Text textStyle="p" fontSize="24px" fontWeight="bold" marginBottom="20px">
              With a wide product range, Assembly Solutions serve any market sector from Automotive, to Nuclear and Utilities.
            </Text>
            <List spacing="4">
                <ListItem fontSize="20px" display="flex" alignItems="center">
                  <ListIcon as={BsCircleFill} fontSize="10px" color="green.900"/>
                  20 Years Excellence
                </ListItem>
                <ListItem fontSize="20px" display="flex" alignItems="center">
                  <ListIcon as={BsCircleFill} fontSize="10px" color="green.900"/>
                  Highly Qualified Experienced Staff
                </ListItem>
                <ListItem fontSize="20px" display="flex" alignItems="center">
                  <ListIcon as={BsCircleFill} fontSize="10px" color="green.900"/>
                  Family Run
                </ListItem>
                <ListItem fontSize="20px" display="flex" alignItems="center">
                  <ListIcon as={BsCircleFill} fontSize="10px" color="green.900"/>
                 Award Winning
                </ListItem>
                <ListItem fontSize="20px" display="flex" alignItems="center">
                  <ListIcon as={BsCircleFill} fontSize="10px" color="green.900"/>
                  Cable Assembly, Control Panel and Wiring Harness Manufacture
              </ListItem>
              <ListItem fontSize="20px" display="flex" alignItems="center">
                <ListIcon as={BsCircleFill} fontSize="10px" color="green.900"/>
                Uk, Bolton Based
              </ListItem>   
              <ListItem fontSize="20px" display="flex" alignItems="center">
                <ListIcon as={BsCircleFill} fontSize="10px" color="green.900"/>
                Brand New Company Owned 32,000sqft Factory
              </ListItem>
            </List>
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
      <Box textStyle="section" as="section" minHeight="700px" position="relative" background="neutral.900">
        <Box textStyle="container" position="relative">
          <CarouselWhatWeDo />
        </Box>
      </Box>
      <Box as="section" position="relative" width="100%" overflow="hidden">
        <CarouselNews />      
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
              ...GatsbyImageSharpFluid
              presentationHeight
            }
          }
        }
      }
    }
  }
`
