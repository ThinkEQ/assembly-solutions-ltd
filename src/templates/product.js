import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


// Load components
import { Box, Heading, Text, ListIcon, List, ListItem } from '@chakra-ui/react'
import CarouselProjects from '../components/Carousel/CarouselProject'
import CarouselReel from '../components/Carousel/CarouselReel'
import { SlideLeftReverse } from '../components/Carousel/index'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import PreviewImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import {Slide, Slider } from 'pure-react-carousel'
import TestimonialBlock from '../components/Testimonial/Testimonial'

// Load asset
import Check from '../components/UI/SVG/svgs/check'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({ title, content, contentComponent, subtitle, imgHeader, testimonial, usps, imgCarousel }) => {
  const PageContent = contentComponent || Content

  return (
    <Fragment>
      <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
        <Box textStyle="section">
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
        <PreviewImage imageInfo={imgHeader} />
      </Box>

      {/** MAIN BODY CONTENT */}
      <Box as="section" textStyle="section">
        <MDXWrapper>
            <Box display="flex" flexDirection={{base: "column", lg: "row"}} justifyContent="space-between">
                <Box width={{base: "100%", lg: "45%"}} marginBottom={{base: "20px", lg: "0"}}>
                  <PageContent content={content} />
                </Box>
                <Box width={{base: "100%", lg: "45%"}}>
                  <TestimonialBlock quote={testimonial.quote} author={testimonial.name} />
                </Box>
            </Box>
        </MDXWrapper>
      </Box>

      {/** Reel */}
      <Box as="section" backgroundColor="neutral.900" position="relative" height={{base: "400px", md: "600px"}} overflow="hidden">
        <CarouselReel totalSlides={imgCarousel.length}>
          <Slider>
              {imgCarousel.map((img, index) => {
                return (
                  <Slide index={index}>
                    <Box padding="0 25px">
                      <PreviewCompatibleImage imageInfo={img.image} height="100%" />
                    </Box>
                  </Slide>
              )
            })}
          </Slider>
          <SlideLeftReverse position="absolute" top="50%" left="-5%" transform="translateY(-50%)" display={{base: "none", lg: "block"}} />
        </CarouselReel>
       
      </Box>
      <BannerUSP />
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
        content={post.html}
        imgHeader={post.frontmatter.image}
        imgCarousel={post.frontmatter.images || []}
      />
    </Layout>
  )
}

export default ProductPage

export const productPageQuery = graphql`
query productPageQuery($slug: StringQueryOperatorInput = {}) {
    markdownRemark(frontmatter: {templateKey: {eq: "product"}}, fields: {slug: $slug}) {
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
        html
    }
  }
`