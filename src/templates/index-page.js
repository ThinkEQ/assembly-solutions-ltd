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

// Load asset
import Icon from '../components/UI/SVG/index'
import teamTablet from '../img/tablet-about.png'
import teamMobile from '../img/mobile-team.png'
import homvidwm from '../videos/HOMEPAGE.webmsd.webm'
import homvidmp from '../videos/HOMEPAGEMP4.mp4'
import teamDesktop from '../img/meettheteam2.jpg'
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
const [isLessThan464, isMoreThat1500] = useMediaQuery(["(max-width: 464px", "(min-width: 1450px)"])
  
return (
    <Fragment>
      <Box as="header" minHeight={{base: "100vh", md:"750px", xl: "900px"}} maxHeight="900px" height="100%" overflow="hidden" background="linear-gradient(0deg, rgba(9,21,64,0.682492980102197) 0%, rgba(9,21,64,0.6852941005503764) 100%)"  zIndex="9" positiom="relative">
        <Box position="absolute" top="0" left="0" width="100%" height="100%" overflow="hidden" zIndex="-1">
          <AspectRatio ratio={{base: 9 / 16, lg: 4 / 3}} >
            <Box as="video" playsInline autoPlay muted loop id="homevid" width="100%" height="100%" overflow="hidden" maxHeight="900px" objectFit="cover">
              <source src={homvidwm} type="video/webm"></source>
              <source src={homvidmp} type="video/mp4"></source>
            </Box>
          </AspectRatio>
        </Box>
            <Box height="100%" maxWidth="1900px" margin="0 auto" minHeight={{base: "100vh", md:"700px"}} maxHeight="100vh"  display="flex" alignItems="flex-start" flexDirection="column" justifyContent="center" position="relative">
              <Box textStyle="section">
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
                </Box>
                <Box position="absolute" bottom={{base: "90px", md: "50px", lg: "0px"}} right={{base: "15px", md: "10%"}} animation={`${bounce} infinite 5s ease-in-out`} cursor="pointer">
                  <ReactScroll>
                    <Icon name="downArrow" />
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
                <Box marginBottom={{base: "10px", md:"25px"}} width={{base:"100px", md: "150px"}}>
                  <SVG name="twentyEmblem" width="100%" height="100%" fill={isLessThan464 ? "#fff" : undefined} />
                </Box>
                <Heading textStyle="h2" color={{base: "#fff", md: "inherit"}}>
                  Meet the ASL team
                </Heading>
                <Text textStyle="p" marginBottom={{base: 6, md: 12}} color={{base: "#fff", md: "inherit"}} maxW={{base: "100%", md:"450px"}}>
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
