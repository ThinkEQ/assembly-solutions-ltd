import React, { Fragment, useEffect, useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/Layout'


// Load components
import { Box, Heading, Text, ListIcon, List, ListItem, useMediaQuery, AspectRatio } from '@chakra-ui/react'
import Carousel from '../components/Carousel/CustomCarousel'
import CarouselReel from '../components/Carousel/CarouselReel'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import PreviewImage from '../components/PreviewCompatibleImage'
import Video from '../components/Video/Video'
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import LayoutCMS from '../components/LayoutCMS/LayoutCMS'

// Load asset
import Check from '../components/UI/SVG/svgs/check'
import WireMP from '../videos/WIRE_PREP.mp4'
import WireWEB from '../videos/WIRE_PREP.webm'
import CableMP from '../videos/CABLE_ASSEMBLY.mp4'
import CableWEB from '../videos/CABLE_ASSEMBLY.webm'
import WiringMP from '../videos/WIRING_HARNESSES.mp4'
import WiringWEB from '../videos/WIRING_HARNESSES.webm'
import ControlMP from '../videos/CONTROL_PANEL.mp4'
import ControlWEB from '../videos/CONTROL_PANEL.webm'

export const ProductCategoryPageTemplate = ({ title, content, contentComponent, subtitle, imgHeader, usps, imgCarousel, relatedProducts, mainContent, video }) => {
  const PageContent = contentComponent || Content
  const [isLargerThan760] = useMediaQuery("(min-width: 760px)")
  const [isLessThan464] = useMediaQuery("(max-width: 464px")
  const [isMoving, setMoving] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function nav(slug) {
    navigate(slug)
  }

  let videoLoader = null

  switch (video) {
    case 'wire-and-cable-preparation':
      videoLoader = {
        mp: WireMP,
        web: WireWEB,
        id: 'wire'
      }
      break
    case 'cable-assembly':
      videoLoader = {
        mp: CableMP,
        web: CableWEB,
        id: 'cable'
      }
      break
    case 'wiring-harness':
      videoLoader = {
        mp: WiringMP,
        web: WiringWEB,
        id: 'harness'
      }
      break
    case 'control-panel':
      videoLoader = {
        mp: ControlMP,
        web: ControlWEB,
        id: 'panel'
      }
      break
    default:
      videoLoader = null
  }

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
        {!videoLoader && <PreviewImage imageInfo={imgHeader} />}
        {videoLoader && 
          <Box width="100%" height="100%" maxHeight={{base: "480px", md: "680px"}} overflow="hidden">
            <Video vidmp={videoLoader.mp} vidweb={videoLoader.web} ratioConfig={{base: 9 / 16, lg: 16 / 9}} />
          </Box>
        }
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

      {(relatedProducts.length > 0 && mounted) &&
        <Box as="section" width="100%" maxHeight="600px" margin={{base:"30px 0", lg: "50px 0"}}>
          <Carousel
            arrows={false}
            centerMode={isLessThan464 ? false : true}
            partialVisible={(isLessThan464 && relatedProducts.length > 1) ? true : false}
            beforeChange={() => setMoving(true)}
            afterChange={() => setMoving(false)}
            >
              {relatedProducts.map((item) => {
                return (
                  <Box onClick={(e) => {
                    if (isMoving) e.preventDefault()
                    else { nav(`/${item.node.fields.slug}`) }}} 
                    cursor="pointer" _active={{cursor: "grabbing"}} padding="0 5px" width="calc(100% - 10px)" height="457px" maxHeight="457px" position="relative">
                    <Box position="absolute" pointerEvents="none" height="100%" width="calc(100% - 10px)" maxHeight="457px" zIndex="50" borderRadius="3px" top="0" left="5px" background="rgba(9,21,64,0.5)" />
                    <PreviewImage imageInfo={item.node.frontmatter.image} borderRadius="3px" height="100%" width="100%" />
                    <Text textAlign="center" zIndex="75" fontSize={{base: "34px", lg:"44px"}} color="#fff" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    {item.node.frontmatter.title}
                    </Text>
                </Box>
                )
              })}          
          </Carousel> 
      </Box>}

    {/**Main content */}
    <Box as="section" textStyle="section">
      <Box textStyle="container">
        <LayoutCMS data={mainContent} />
      </Box>
    </Box>

    {/** Reel */}
    {imgCarousel.length > 0 &&
      <Box as="section" backgroundColor="neutral.900" position="relative" height={{base: "300px", md: "450px", lg: "600px"}} width="100%" overflow="hidden">
          <CarouselReel data={imgCarousel} />
      </Box>
    }

      <Box as="section" textStyle="section">
        <BannerUSP />
      </Box>
     
      <Box as="section">
          <BannerLearnMore />
      </Box>
    </Fragment>
  )
}

const ProductCategoryPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { seo } = post.frontmatter
  const title = seo ? seo.title : post.frontmatter.title
  const description = seo ? seo.description : undefined
  return (
    <Layout metaTitle={title} metaDescription={description}>
      <ProductCategoryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        usps={post.frontmatter.usps || []}
        mainContent={post.frontmatter.layout || []}
        content={post.html}
        relatedProducts={pageContext.products}
        imgHeader={post.frontmatter.image}
        video={post.frontmatter.video}
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
          video 
          seo {
            title
            description
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
              fluid(maxHeight: 680, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp
                presentationHeight
              }
            }
          }
          images {
              alt
              products
              image {
                childImageSharp {
                  fluid(maxHeight: 580, quality: 60) {
                    ...GatsbyImageSharpFluid_withWebp
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