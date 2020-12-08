import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Load components
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import Button from '../theme/button'
import Layout from '../components/Layout'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import Carousel, { SlideLeft, SlideRight } from '../components/Carousel/Carousel'
import { Slider, Slide } from 'pure-react-carousel'
import ProductSlide from '../components/ProductSlide/ProductSlide'
import BannerOurCustomers from '../components/Banners/BannerOurCustomers/BannerOurCustomers'

// Load asset
import stock from '../img/stock.jpg'
import DownArrow from '../img/arrowCircleDown.svg'
import stockCable from '../img/stockWire.jpg'

const imgBk = {
  background: `linear-gradient(0deg, rgba(9,21,64,0.682492980102197) 0%, rgba(9,21,64,0.6852941005503764) 100%), url(${stock});`,
  backgroundSize: 'cover'
}

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
return (
    <Box>
      <Box as="header" minHeight="100vh" paddingTop="100px" {...imgBk} display="flex">
          <Box padding="50px"  display="flex" minHeight="100vh" alignItems="flex-start" flexDirection="column" justifyContent="center">
              <Heading textStyle="h1" textTransform="uppercase" color="#fff">
                Efficient manufacturing <br/>
                that delivers <Text as="span" background="gradient.900" style={{ backgroundClip: "text", WebkitTextFillColor: "transparent"}}>Quality & Speed</Text>
              </Heading>
              <Text fontSize="24px" lineHeight="38px" color="#fff" marginBottom="50px">
                ASL is a family business based in Bolton, manufacturing cable <br/>
                assemblies, wiring harnesses and control panels.
              </Text>
              <Button variant="solid">Watch Full Video</Button>
          </Box>
          <Box display="flex" width="20%" justifyContent="flex-end" padding="50px" alignSelf="flex-end" cursor="pointer">
            <Image src={DownArrow} />
          </Box>
      </Box>
      <Box textStyle="section" as="section" minHeight="700px" position="relative" background="neutral.900">
        <Heading textStyle="h1" marginBottom={{base: "40px", lg:"60px"}}>
          What we do?
        </Heading>
        <Carousel totalSlides={3}>
            <Slider onMasterSpinner>
              <Slide index={0}>
                <ProductSlide
                  heading="Cable Assembly"
                  text="With an IPC A-620 fully trained workforce, we guarantee low costs and high quality on all our cable assembly manufacture."
                  imgSrc={stockCable}
                />
              </Slide>
              <Slide index={1}>
                <ProductSlide
                  heading="Mock Slide"
                  text="With an IPC A-620 fully trained workforce, we guarantee low costs and high quality on all our cable assembly manufacture."
                  imgSrc={stockCable}
                />
              </Slide>
              <Slide index={3}>
              <ProductSlide
                heading="Mock Slide - 2"
                text="With an IPC A-620 fully trained workforce, we guarantee low costs and high quality on all our cable assembly manufacture."
                imgSrc={stockCable}
              />
            </Slide>
            </Slider>
            <SlideLeft position="absolute" top="50%" left="20px" transform="translateY(-50%)" display={{base: "none", lg: "block"}}  />
            <SlideRight position="absolute" top="50%" right="20px" transform="translateY(-50%)" display={{base: "none", lg: "block"}} />
        </Carousel>
      </Box>
      <Box as="section" >
       <BannerOurCustomers />
      </Box>
      <Box as="section" background="gradient.700" height="700px" width="100%" position="relative">
            <Box position="absolute" top="50%" left="10%" transform="translateY(-50%)">
                <Heading textStyle="h2">
                  Meet the ASL team
                </Heading>
                <Text textStyle="p" marginBottom={12} maxW={{base: "100%", lg:"70%"}}>
                  Come and meet the friendly faces who strive for excellence in everything they do
                </Text>
                <Button variant="outline">Lear more</Button>
            </Box>
      </Box>

      <Box as="section" position="relative">
        <Box width="100%" height="440px" background="blue.900">
          <Heading textStyle="h2" color="#fff" padding="100px 100px">
            Latest News
          </Heading>
        </Box>
        <Box  width="100%" height="440px" background="neutral.900" />
      
      </Box>
     
      <BannerUSP />
    </Box>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
