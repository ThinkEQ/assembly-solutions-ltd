import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Load components
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import Button from '../theme/button'
import Layout from '../components/Layout'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import CarouselWhatWeDo from '../components/Carousel/CarouselWhatWeDo'
import CarouselNews from '../components/Carousel/CarouselNews'
import BannerOurCustomers from '../components/Banners/BannerOurCustomers/BannerOurCustomers'

// Load asset
import stock from '../img/stock.jpg'
import DownArrow from '../img/arrowCircleDown.svg'

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
      <Box as="header" minHeight={{base: "calc(100vh - 50px)", lg:"calc(100vh - 100px)"}} paddingTop={{base: "50px", lg: "100px"}} textStyle="section" {...imgBk}>
          <Box minHeight={{base: "calc(100vh - 50px)", lg:"calc(100vh - 100px)"}} textStyle="container" display="flex" alignItems="flex-start" flexDirection="column" justifyContent="center" position="relative">
             
                <Heading textStyle="h1" textTransform="uppercase" color="#fff">
                  Efficient manufacturing <br/>
                  that delivers <Text as="span" background="gradient.900" style={{ backgroundClip: "text", WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text"}}>Quality & Speed</Text>
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
        <Box textStyle="container" position="relative">
          <CarouselWhatWeDo />
        </Box>
      </Box>
      <Box as="section" textStyle="section">
        <Box textStyle="container">
          <BannerOurCustomers />
        </Box>
      </Box>
      <Box as="section" textStyle="section" background="gradient.700" height="700px" width="100%" position="relative">
          <Box textStyle="container" height="100%">
              <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                <Heading textStyle="h2">
                  Meet the ASL team
                </Heading>
                <Text textStyle="p" marginBottom={12} maxW={{base: "100%", lg:"70%"}}>
                  Come and meet the friendly faces who strive for excellence in everything they do
                </Text>
                <Button variant="outline" maxWidth="200px">Learn more</Button>
            </Box>
          </Box>
      </Box>

      <Box as="section" position="relative" width="100%" overflow="hidden">
       <CarouselNews />      
      </Box>

      <Box as="section" textStyle="section">
        <BannerUSP />
      </Box>
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
