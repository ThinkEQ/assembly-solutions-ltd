import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


// Load components
import { Box, Heading, Text, useMediaQuery, ListIcon, List, ListItem, Grid, GridItem } from '@chakra-ui/react'
import CarouselProjects from '../components/Carousel/CarouselProduct'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import PreviewImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import TestimonialBlock from '../components/Testimonial/Testimonial'

// Load asset
import Check from '../components/UI/SVG/svgs/check'

export const ProductPageTemplate = ({ title, content, contentComponent, subtitle, imgHeader, testimonial, usps, relatedProducts, blurbs }) => {
  const PageContent = contentComponent || Content
  const [isLargerThan760] = useMediaQuery("(min-width: 760px)")

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
            <Box position="relative">
              <PreviewImage imageInfo={imgHeader} />
            </Box>
        </Box>
      </Box>

      {/** MAIN BODY CONTENT */}
      <Box as="section" textStyle="section">
        <MDXWrapper>
            <Box style={{columnCount: 2, columnGap: "60px"}}>
                <PageContent content={content} />
            </Box>
        </MDXWrapper>
      </Box>

      <Box as="section" position="relative" width="100%" overflow="hidden" margin={{base:"30px 0", lg: "0"}}>
        <CarouselProvider totalSlides={relatedProducts.length} visibleSlides={isLargerThan760 ? 3 : 2} naturalSlideWidth={200} isPlaying={true} playDirection="forward" interval={3000} naturalSlideHeight={400} infinite={true}>
        <Slider>
          {relatedProducts.map((item, index) => {
            return (
              <Slide index={index}>
                <Box padding="0 5px" position="relative" height="100%">
                  <PreviewImage imageInfo={item.image} borderRadius="3px" height="100%" />
                  <Text fontSize={{base: "24px", md: "34px", lg:"44px"}} color="#fff" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    {item.name}
                  </Text>
                </Box>
            </Slide>
            )
          })}          
        </Slider>
        </CarouselProvider>
        </Box>

        <Box as="section" textStyle="section">
           
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
console.log(data, 'data industries')
  return (
    <Layout>
      <ProductPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        usps={post.frontmatter.usps || []}
        testimonial={post.frontmatter.testimonial || {}}
        blurbs={post.frontmatter.blurbs || []}
        relatedProducts={post.frontmatter.related_products || []}
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
          related_products {
            name
            slug
            alt
            image {
                childImageSharp {
                  fluid(maxHeight: 457, quality: 80) {
                    ...GatsbyImageSharpFluid
                    presentationHeight
                  }
                }
            }
          }
          blurbs {
            text
            title
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
                  fluid(maxHeight: 680, quality: 80) {
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