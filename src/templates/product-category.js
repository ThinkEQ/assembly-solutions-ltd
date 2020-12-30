import React, { Fragment } from 'react'
import { graphql, Link as ReachLink } from 'gatsby'
import Layout from '../components/Layout'


// Load components
import { Box, Heading, Text, ListIcon, List, ListItem, useMediaQuery, Link, Grid, GridItem } from '@chakra-ui/react'
import Carousel, { SlideLeftReverse } from '../components/Carousel/index'
import CarouselProjects from '../components/Carousel/CarouselProject'
import CarouselReel from '../components/Carousel/CarouselReel'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import PreviewImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper, toHTML } from '../components/Content'
import {Slide, Slider } from 'pure-react-carousel'
import TestimonialBlock from '../components/Testimonial/Testimonial'

// Load asset
import Check from '../components/UI/SVG/svgs/check'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductCategoryPageTemplate = ({ title, content, contentComponent, subtitle, imgHeader, usps, imgCarousel, relatedProducts, mainContent }) => {
  const PageContent = contentComponent || Content
  const [isLargerThan760] = useMediaQuery("(min-width: 760px)")

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

      {/** INTRO BODY CONTENT */}
      <Box as="section" textStyle="section">
        <Box textStyle="container">
          <MDXWrapper>
              <Box style={{columnCount: isLargerThan760 ? 2 : 1, columnGap: "60px"}}>
                  <PageContent content={content} />
              </Box>
          </MDXWrapper>
        </Box>
      </Box>

    {/**Relate products Carousel */}
    <Box as="section" position="relative" width="100%" maxHeight="500px" margin="30px 0">
      <Carousel totalSlides={relatedProducts.length} visibleSlides={isLargerThan760 ? 3 : 1} naturalSlideWidth={450} isPlaying={false} playDirection="forward" interval={3000} naturalSlideHeight={450} infinite={true}>
      <Slider>
        {relatedProducts.map((item, index) => {
          return (
            <Slide index={index}>
              <Box cursor="pointer" mr={{base: 0, lg:"5px"}} height="100%" maxHeight="480px" position="relative">
                <Link as={ReachLink} to={item.node.fields.slug} >
                    <Box position="absolute" height="100%" width="100%" maxHeight="457px" zIndex="50" borderRadius="3px" top="0" left="0px" background="rgba(9,21,64,0.5)" />
                    <PreviewImage imageInfo={item.node.frontmatter.image} borderRadius="3px" height="100%" />
                    <Text textAlign="center" zIndex="75" fontSize={{base: "34px", lg:"44px"}} color="#fff" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    {item.node.frontmatter.title}
                    </Text>
                </Link>
              </Box>
          </Slide>
          )
        })}          
      </Slider>
      </Carousel>
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
       <CarouselReel totalSlides={imgCarousel.length + 1}>
         <Slider>
             {imgCarousel.map((img, index) => {
               return (
                 <Slide index={index}>
                   <Box padding={{base: "0 5px", lg: "0 25px"}}>
                     <PreviewCompatibleImage imageInfo={img.image} borderRadius="3px" height="100%" />
                   </Box>
                 </Slide>
             )
           })}
         </Slider>
         <SlideLeftReverse position="absolute" top="50%" left="-5%" transform="translateY(-50%)" display={{base: "none", lg: "block"}} />
       </CarouselReel> 
      </Box>

      <Box as="section" textStyle="section">
       <BannerUSP />
      </Box>
     
      <Box as="section">
          <BannerLearnMore />
      </Box>
     
      <Box as="section" position="relative" width="100%" overflow="hidden">
        
          <CarouselProjects />
      </Box>
    </Fragment>
  )
}

const ProductCategoryPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
 
  return (
    <Layout>
      <ProductCategoryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        usps={post.frontmatter.usps || []}
        mainContent={post.frontmatter.layout || []}
        content={post.html}
        relatedProducts={pageContext.products}
        imgHeader={post.frontmatter.image}
        imgCarousel={post.frontmatter.images || []}
      />
    </Layout>
  )
}

export default ProductCategoryPage

export const productCategoryPageQuery = graphql`
query productCategoryPageQuery($id: String!) {
  markdownRemark(id: { eq: $id }, frontmatter: {templateKey: {eq: "product-category"}}) {
    frontmatter {
          title,
          subtitle
          usps {
            usp
          }
          layout {
              type
              column {
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
              products
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