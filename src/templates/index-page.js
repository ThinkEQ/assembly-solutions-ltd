import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'

// Load components
import { Box, Heading, Text, Button, keyframes, AspectRatio, useMediaQuery } from '@chakra-ui/react'
import ReactScroll from '../components/ReactScroll/ReactScroll'

//import Button from '../theme/button'
import Layout from '../components/Layout'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import CarouselWhatWeDo from '../components/Carousel/CarouselWhatWeDo'
import NewsArticles from '../components/StaticQueries/NewsArticles'
import BannerOurCustomers from '../components/Banners/BannerOurCustomers/BannerOurCustomers'
import SVG from '../components/UI/SVG/index'
import Video from '../components/Video/Video'

// Load asset
import teamTablet from '../img/default/tablet-about.png'
import teamMobile from '../img/default/mobile-team.png'
import homvidwm from '../videos/HOMEPAGE.webmsd.webm'
import homvidmp from '../videos/HOMEPAGEMP4.mp4'
import teamDesktop from '../img/default/meettheteam2.jpg'
import cable from '../img/default/cable-assemblies.png'
import '../components/UI/SVG/styles.css'

const bounce = keyframes `
  0%{transform: translateY(-25px)}
  50%{transform: translateY(0px)}
  100%{transform: translateY(-25px)}
`

const mobile = `linear-gradient(184.08deg, rgba(9,21,64, 0.6), 100%, rgba(255,255,255,1), #091540 100%), url(${teamMobile})`
const tablet = `linear-gradient(270deg, rgba(36,155,171,0) 0%, rgba(36,155,171,0) 31.24%, #249BAB 90%), url(${teamTablet})`
const dekstop = `url(${teamDesktop})`

export const IndexPageTemplate = () => {
const [isMoreThat1500] = useMediaQuery(["(min-width: 1450px)"])
  
return (
    <Fragment>
      <Box as="header" minHeight={{base: "auto", md:"750px", xl: "900px"}} maxHeight="900px" height="100%" overflow="hidden" background="linear-gradient(0deg, rgba(9,21,64,0.682492980102197) 0%, rgba(9,21,64,0.6852941005503764) 100%)"  zIndex="9" positiom="relative">
        <Box position="absolute" top="0" left="0" width="100%" height="100%" overflow="hidden" zIndex="-1">
         <Video vidweb={homvidwm} vidmp={homvidmp} imgThumb={cable} />
        </Box>
            <Box height="100%" maxWidth="1900px" margin="0 auto" minHeight={{base: "600px", md:"700px"}} maxHeight="100vh"  display="flex" alignItems="flex-start" flexDirection="column" justifyContent="center" position="relative">
              <Box textStyle="section">
                <Heading textStyle="h1" textTransform="uppercase" color="#fff">
                  Efficient manufacturing <br/>
                  that delivers <Text as="span" background="gradient.900" style={{ backgroundClip: "text", WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text"}}>Quality & Speed</Text>
                </Heading>
                <Text fontSize={{base: "16px", lg:"24px"}} lineHeight={{base: "28px", lg:"38px"}} color="#fff" marginBottom="50px">
                ASL is a sub-contract manufacturer of electrical wiring assemblies and control panels
                </Text>
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Button variant="solid">Watch Full Video</Button>
                </Box>
                <Box position="absolute" bottom={{base: "0", md: "50px", lg: "0px"}} right={{base: "15px", md: "10%"}} animation={`${bounce} infinite 5s ease-in-out`} cursor="pointer">
                  <ReactScroll>
                    <SVG name="downArrow" />
                  </ReactScroll>  
                </Box>
              </Box>
            </Box>   
      </Box>
      <Box textStyle="section" as="section" id="what-we-do-home" minHeight={{base: "600px", lg:"800px"}} position="relative" background="gradient.50">
        <Box textStyle="container" position="relative">
          <CarouselWhatWeDo />
        </Box>
      </Box>
      <Box as="section" >
          <BannerOurCustomers />
      </Box>
      <Box as="section" textStyle="section" backgroundImage={{base: mobile,  sm: tablet, lg: dekstop}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center bottom" height="auto" minHeight={{base: "auto", sm: "400px",  md: isMoreThat1500 ? "700px" :"auto"}} width="100%" position="relative">
          <Box textStyle="container" height="100%">
              <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                <Box marginBottom={{base: "10px", md:"25px"}} fill="#fff" width={{base:"100px", md: "150px"}}>
                  <Box display={{base: "none", sm: "block"}}><SVG name="twentyEmblem" width="100%" height="100%"  /></Box>
                  <Box display={{base: "block", sm: "none"}}><SVG name="twentyEmblem" width="100%" height="100%" fill="#fff" /></Box>
                </Box>
                <Heading textStyle="h2" color={{base: "#fff", sm: "inherit"}}>
                  Meet the team
                </Heading>
                <Text textStyle="p" marginBottom={{base: 6, md: 12}} color={{base: "#fff", sm: "inherit"}} maxW={{base: "100%", md:"450px"}}>
                  Come and meet the friendly faces who strive for excellence in everything they do
                </Text>
                <Button variant="outline" maxWidth="151px" onClick={() => navigate('/team')}>Learn more</Button> 
            </Box>
          </Box>
      </Box>

      <Box as="section" position="relative" width="100%">
        <NewsArticles />
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
    <Layout metaTitle="ASL - Cable Assembly, Panel Wiring & Control Panel Manufacturers" metaDescription="ASL are the UK leading Cable Assembly, Panel Wiring & Control Panel Manufacturers. Proud winners of Manufacturing Business of the Year Award.">
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
