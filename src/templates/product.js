import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


// Load components
import { Box, Heading, Text, ListIcon, List, ListItem } from '@chakra-ui/react'
import CarouselReel from '../components/Carousel/CarouselReel'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import PreviewImage from '../components/PreviewCompatibleImage'
import { HTMLContent } from '../components/Content'
import LayoutCMS from '../components/LayoutCMS/LayoutCMS'

// Load asset
import Check from '../components/UI/SVG/svgs/check'

export const ProductPageTemplate = ({ title, mainContent, subtitle, imgHeader, usps, imgCarousel }) => {
 
  return (
    <Fragment>
      <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
        <Box textStyle="section">
            <Box textStyle="container">
              <Text textStyle="p" marginBottom="20px" fontSize="22px">
                {title}
              </Text>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}} marginBottom={{base: "20px", lg: "0"}}>
                  <Heading as="h1" textStyle="h2" width={{base: "100%", lg:"65%"}} marginBottom="40px">
                    {subtitle}
                  </Heading>
                  <List spacing="6">
                  {usps.map((item) => {
                      return (
                          <ListItem display="flex" alignItems="center" fontSize="20px" lineHeight="28px">
                              <ListIcon as={Check} fontSize="28px" marginRight="20px" />
                              {item.usp}
                          </ListItem>
                      )
                  })}
                  </List>
              </Box>             
            </Box>
        </Box>
        <Box height={{base: "200px", md: "480px", lg: "600px"}} overflow="hidden">
         <PreviewImage imageInfo={imgHeader} height="100%" />
        </Box>
      </Box>

     {/**Main content */}
    <Box as="section" textStyle="section">
      <Box textStyle="container">
        <LayoutCMS data={mainContent} />
      </Box>
    </Box>

      {/** Reel */}
      {imgCarousel.length > 0 && 
      <Box as="section" backgroundColor="neutral.900" position="relative" height={{base: "300px", md: "600px"}} width="100%" overflow="hidden">
          <CarouselReel data={imgCarousel} />
      </Box>}

      <Box as="section" textStyle="section">
        <Box textStyle="container">
          <BannerUSP />
        </Box>
      </Box>

      <BannerLearnMore />
    </Fragment>
  )
}

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { seo } = post.frontmatter
  const title = seo ? seo.title : post.frontmatter.title
  const description = seo ? seo.description : undefined

  return (
    <Layout metaTitle={title} metaDescription={description}>
      <ProductPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        usps={post.frontmatter.usps || []}
        mainContent={post.frontmatter.layout || []}
        imgHeader={post.frontmatter.image}
        imgCarousel={post.frontmatter.images || []}
      />
    </Layout>
  )
}

export default ProductPage

export const productPageQuery = graphql`
query productPageQuery($id: String!) {
  markdownRemark(id: { eq: $id }, frontmatter: {templateKey: {eq: "product"}}) {
      frontmatter {
        title,
        subtitle
        usps {
          usp
        }
        seo {
          title
          description
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
          }
        }
        image {
          childImageSharp {
            fluid(maxHeight: 600, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
            }
          }
        }
        images {
            alt
            image {
              childImageSharp {
                fluid(maxHeight: 580, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationHeight
                }
              }
          }
        }
      }
    }
  }
`