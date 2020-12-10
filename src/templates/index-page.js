import React, { Fragment } from 'react'
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
import CardNews from '../components/Cards/CardNews/CardNews'

// Load asset
import stock from '../img/stock.jpg'
import DownArrow from '../img/arrowCircleDown.svg'
import stockCable from '../img/stockWire.jpg'

const imgBk = {
  background: `linear-gradient(0deg, rgba(9,21,64,0.682492980102197) 0%, rgba(9,21,64,0.6852941005503764) 100%), url(${stock});`,
  backgroundSize: 'cover',
  backgroundPosition: "center",
  width: '100vw'
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
    <Fragment>
      <Box as="header" minHeight={{base: "calc(100vh - 50px)", lg:"calc(100vh - 100px)"}} paddingTop={{base: "50px", lg: "100px"}} {...imgBk}>
          <Box minHeight={{base: "calc(100vh - 50px)", lg:"calc(100vh - 100px)"}} textStyle="section" display="flex" alignItems="flex-start" flexDirection="column" justifyContent="center" position="relative">
              <Heading textStyle="h1" textTransform="uppercase" color="#fff">
                Efficient manufacturing <br/>
                that delivers <Text as="span" background="gradient.900" style={{ backgroundClip: "text", WebkitTextFillColor: "transparent"}}>Quality & Speed</Text>
              </Heading>
              <Text fontSize={{base: "16px", lg:"24px"}} lineHeight={{base: "28px", lg:"38px"}} color="#fff" marginBottom="50px">
                ASL is a family business based in Bolton, manufacturing cable <br/>
                assemblies, wiring harnesses and control panels.
              </Text>
              <Box display="flex" justifyContent="space-between" width="100%">
              <Button variant="solid">Watch Full Video</Button>
                <Box display={{base:"flex", lg: "none"}} justifyContent="flex-end" alignSelf="flex-end" cursor="pointer">
                  <Image src={DownArrow} />
                </Box>
              </Box>
              <Box display={{base: "none", lg:"block"}} position="absolute" bottom="50px" right="50px" cursor="pointer">
                <Image src={DownArrow} />
              </Box>
          </Box>
      </Box>
      <Box textStyle="section" as="section" minHeight="700px" position="relative" background="neutral.900">
        <Heading textStyle="h1" marginBottom={{base: "40px", lg:"60px"}}>
          What we do?
        </Heading>
        <Carousel totalSlides={3} isIntrinsicHeight infinite setHeight={100} setWidth={100}>
            <Slider >
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
            <Box position="absolute" top="50%" left="0" textStyle="section" transform="translateY(-50%)">
                <Heading textStyle="h2">
                  Meet the ASL team
                </Heading>
                <Text textStyle="p" marginBottom={12} maxW={{base: "100%", lg:"70%"}}>
                  Come and meet the friendly faces who strive for excellence in everything they do
                </Text>
                <Button variant="outline">Lear more</Button>
            </Box>
      </Box>

      <Box as="section" position="relative" overflow="hidden">
        <Box width="100%" height="440px" textStyle="section" background="blue.900">
          <Heading textStyle="h2" color="#fff">
            Latest News
          </Heading>
        </Box>
        <Box  width="100%" height="440px" background="neutral.900" />
        <Box height="600px" overflow="auto" width="100%" position="absolute" top="55%" left="10%" transform="translateY(-50%)">

        <Carousel isIntrinsicHeight totalSlides={5} visibleSlides={3} setHeight={100} setWidth={100}>
        <Slider >
          <Slide index={0} style={{padding: "10px", width: "500px"}}>
            <CardNews imgSrc={stock} title="ASL 1 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
          </Slide>
          <Slide index={1} style={{padding: "10px", width: "500px"}}>
            <CardNews imgSrc={stock} title="ASL 2 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
          </Slide>
          <Slide index={2} style={{padding: "10px", width: "500px"}}>
            <CardNews imgSrc={stock} title="ASL 3 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
          </Slide>
          <Slide index={3} style={{padding: "10px", width: "500px"}}>
          <CardNews imgSrc={stock} title="ASL 4 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
        </Slide>
        </Slider>
        </Carousel>
        </Box>
      </Box>
     
      <BannerUSP />
    </Fragment>
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
