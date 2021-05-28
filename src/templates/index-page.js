import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'

// Load components
import { Box, Heading, Text, Button, keyframes, useDisclosure, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import ReactScroll from '../components/ReactScroll/ReactScroll'

//import Button from '../theme/button'
import Layout from '../components/Layout'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import CarouselWhatWeDo from '../components/Carousel/CarouselWhatWeDo'
import NewsArticles from '../components/StaticQueries/NewsArticles'
import BannerOurCustomers from '../components/Banners/BannerOurCustomers/BannerOurCustomers'
import Svg from '../components/UI/SVG/index'
import Video from '../components/Video/Video'

// Load asset
import teamTablet from '../img/default/tablet-about.png'
import teamMobile from '../img/default/mobile-team.png'
import homvidwm from '../videos/HOMEPAGE.webmsd.webm'
import homvidmp from '../videos/HOMEPAGE.mp4'
import teamDesktop from '../img/default/meettheteam2.jpg'
import '../components/UI/SVG/styles.css'

const bounce = keyframes `
  0%{transform: translateY(-25px)}
  50%{transform: translateY(0px)}
  100%{transform: translateY(-25px)}
`

const mobile = `linear-gradient(184.08deg, rgba(9,21,64, 0.6), 100%, rgba(255,255,255,1), #091540 100%), url(${teamMobile})`
const tablet = `linear-gradient(270deg, rgba(36,155,171,0) 0%, rgba(36,155,171,0) 31.24%, #249BAB 90%), url(${teamTablet})`
const dekstop = `url(${teamDesktop})`

const IndexPageTemplate = () => {
const {isOpen, onOpen, onClose } = useDisclosure()
  
return (
    <Fragment>
      <Box as="header" minHeight={{base: "auto", md:"750px", xl: "900px"}} maxHeight="900px" height="100%" overflow="hidden" background="linear-gradient(0deg, rgba(9,21,64,0.682492980102197) 0%, rgba(9,21,64,0.6852941005503764) 100%)"  zIndex="9" positiom="relative">
        <Box position="absolute" top="0" left="0" width="100%" height="100%" overflow="hidden" zIndex="-1">
         <Video vidweb={homvidwm} vidmp={homvidmp} id="home" />
        </Box>
            <Box height="100%" maxWidth="1900px" margin="0 auto" minHeight={{base: "600px", md:"700px"}} maxHeight="100vh"  display="flex" alignItems="flex-start" flexDirection="column" justifyContent="center" position="relative">
              <Box textStyle="section">
                <Heading textStyle="h1" textTransform="uppercase" color="#fff" fontSize={{base: "42px", md:"60px"}}>
                EFFICIENT MANUFACTURING <br />THAT DELIVERS <Text as="span" background="gradient.900" style={{ backgroundClip: "text", WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text"}}>QUALITY & SPEED</Text>
                </Heading>
                <Text fontSize={{base: "16px", lg:"24px"}} fontWeight="light" lineHeight={{base: "28px", lg:"38px"}} color="#fff" marginBottom="50px">
                The Home of Cable Assemblies, Wiring Harnessess and Control Panels
                </Text>
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Button variant="solid" onClick={onOpen}>Watch Full Video</Button>
                </Box>
                <Box position="absolute" bottom={{base: "0", md: "50px", lg: "0px"}} right={{base: "15px", md: "10%"}} animation={`${bounce} infinite 5s ease-in-out`} cursor="pointer">
                  <ReactScroll>
                    <Svg name="downArrow" />
                  </ReactScroll>  
                </Box>
              </Box>
            </Box>   
      </Box>
      <Box as="section" id="what-we-do-home">
          <CarouselWhatWeDo />
      </Box>
      <Box as="section" background="#fff" >
          <BannerOurCustomers />
      </Box>
      <Box as="section" textStyle="section" backgroundImage={{base: mobile,  sm: tablet, lg: dekstop}} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center bottom" height="auto" minHeight={{base: "auto", sm: "400px",  md: "auto", xxl: "700px"}} width="100%" position="relative">
          <Box textStyle="container" height="100%" paddingY={{base: 6, md:12}}>
              <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                <Box marginBottom={{base: "10px", md:"25px"}} fill="#fff" width={{base:"100px", md: "150px"}}>
                  <Box display={{base: "none", sm: "block"}}><Svg name="twentyEmblem" width="100%" height="100%"  /></Box>
                  <Box display={{base: "block", sm: "none"}}><Svg name="twentyEmblem" width="100%" height="100%" fill="#fff" /></Box>
                </Box>
                <Heading textStyle="h2" color={{base: "#fff", sm: "inherit"}}>
                  Meet the team
                </Heading>
                <Button variant="default" maxWidth="151px" onClick={() => navigate('/team')}>Meet team</Button> 
            </Box>
          </Box>
      </Box>

      <Box as="section" position="relative" width="100%">
        <NewsArticles />
      </Box>
      <Box as="section" textStyle="section">
        <BannerUSP />
      </Box>
      <Modal onClose={onClose} size="100%" motionPreset="scale" isOpen={isOpen} isCentered closeOnEsc>
      <ModalOverlay />
      <ModalContent width="80%" background="none">
        <ModalBody padding="0" background="none">
            <Box paddingBottom="50%" position="relative" height="0" overflow="hidden">
              <iframe width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/mkjb73l9zyY"
                frameborder="0"
                title="youtube"
                style={{border: 0, position: "absolute", top: 0, left: 0, width:"100%", height:"100%"}}
                allowfullscreen />
            </Box> 
        </ModalBody>
      </ModalContent>
    </Modal>
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

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
export default IndexPage