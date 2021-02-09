import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


// Load components
import { Box, Heading, Text, ListIcon, List, ListItem, Grid, GridItem } from '@chakra-ui/react'
import CarouselReel from '../components/Carousel/CarouselReel'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import PreviewImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper, toHTML } from '../components/Content'
import TestimonialBlock from '../components/Testimonial/Testimonial'

// Load asset
import Check from '../components/UI/SVG/svgs/check'

export const ProductPageTemplate = ({ title, mainContent, contentComponent, subtitle, imgHeader, testimonial, usps, imgCarousel }) => {
  const PageContent = contentComponent || Content

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
        <PreviewImage imageInfo={imgHeader} />
      </Box>

     {/**Main content */}
    <Box as="section" textStyle="section">
      <Box textStyle="container">
        <MDXWrapper>
          <Grid templateColumns={{base: "1fr", lg: "repeat(2, 1fr)"}} templateRows="auto" gap={10}>
              {mainContent.map((content) => {
                  const span = content.type === 'column' ? 1 : 2

                  if (content.type === 'full') {
                      return (
                          <GridItem colSpan={span}>
                              <Heading as="h4" textStyle="h4" marginBottom="20px">
                                  {content.full.title}
                              </Heading>
                              <PageContent content={toHTML(content.full.text)} />
                          </GridItem>
                      )
                  }
                  if (content.type === 'testimonial') {
                      return (
                          <GridItem colSpan={{base: 2,  lg: 1}}>
                              <TestimonialBlock author={content.testimonial.name}  quote={content.testimonial.quote} />
                          </GridItem>
                      )
                  }
                  return (
                      <GridItem colSpan={{base: 2,  lg: span}}>
                          <Heading as="h4" textStyle="h4" marginBottom="20px">
                              {content.column.title}
                          </Heading>
                          <PageContent content={toHTML(content.column.text)} />
                      </GridItem>
                  )
              })}
          </Grid>
          </MDXWrapper>
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
        testimonial={post.frontmatter.testimonial || {}}
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
        testimonial {
          name,
          quote
        }
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
            fluid(maxHeight: 680, quality: 80) {
              ...GatsbyImageSharpFluid
              presentationHeight
            }
          }
        }
        images {
            alt
            image {
              childImageSharp {
                fluid(maxHeight: 580, quality: 80) {
                  ...GatsbyImageSharpFluid
                  presentationHeight
                }
              }
          }
        }
      }
    }
  }
`