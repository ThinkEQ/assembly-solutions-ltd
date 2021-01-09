import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


// Load components
import { Box, Heading, Text, ListIcon, List, ListItem, Grid, GridItem } from '@chakra-ui/react'
import CarouselProjects from '../components/Carousel/CarouselProject'
import CarouselReel from '../components/Carousel/CarouselReel'
import { SlideLeftReverse } from '../components/Carousel/index'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import PreviewImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper, toHTML } from '../components/Content'
import {Slide, Slider } from 'pure-react-carousel'
import TestimonialBlock from '../components/Testimonial/Testimonial'

// Load asset
import Check from '../components/UI/SVG/svgs/check'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

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
                  <Heading as="h1" textStyle="h1" width={{base: "100%", lg:"65%"}} marginBottom="40px">
                    {subtitle}
                  </Heading>
                  <List spacing="6">
                  {usps.map((item) => {
                      return (
                          <ListItem display="flex" alignItems="center" fontSize="20px" lineHeight="28px">
                              <ListIcon as={Check} fontSize="28px" />
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
                          <GridItem>
                              <TestimonialBlock author={content.testimonial.name}  quote={content.testimonial.quote} />
                          </GridItem>
                      )
                  }
                  return (
                      <GridItem colSpan={span}>
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
      <Box as="section" backgroundColor="neutral.900" position="relative" height={{base: "400px", md: "600px"}} overflow="hidden">
        <CarouselReel totalSlides={imgCarousel.length}>
          <Slider>
              {imgCarousel.map((img, index) => {
                return (
                  <Slide index={index}>
                    <Box padding="0 25px">
                      <PreviewCompatibleImage imageInfo={img.image} height="100%" maxHeight="450px" />
                    </Box>
                  </Slide>
              )
            })}
          </Slider>
          <SlideLeftReverse position="absolute" top="50%" left="-5%" transform="translateY(-50%)" display={{base: "none", lg: "block"}} />
        </CarouselReel>
       
      </Box>
      <Box as="section" textStyle="section">
        <Box textStyle="container">
          <BannerUSP />
        </Box>
      </Box>

      <BannerLearnMore />
      <Box as="section" position="relative" width="100%" overflow="hidden">
          <CarouselProjects />
      </Box>
    </Fragment>
  )
}


const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
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