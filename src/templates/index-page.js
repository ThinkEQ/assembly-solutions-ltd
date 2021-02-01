import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'

// Load components
import { Box, Heading, Text, Button, keyframes, useMediaQuery } from '@chakra-ui/react'
import ReactScroll from '../components/ReactScroll/ReactScroll'

//import Button from '../theme/button'
import Layout from '../components/Layout'
import BannerUSP from '../components/Banners/BannerUSP/BannerUSP'
import CarouselWhatWeDo from '../components/Carousel/CarouselWhatWeDo'
import NewsArticles from '../components/StaticQueries/NewsArticles'
import BannerOurCustomers from '../components/Banners/BannerOurCustomers/BannerOurCustomers'

// Load asset
import stock from '../img/stock.jpg'
import Icon from '../components/UI/SVG/index'
import teamTablet from '../img/about-bg.png'
import teamDesktop from '../img/about-imageAlt.jpg'
import teamMobile from '../img/mobile-team.png'
import '../components/UI/SVG/styles.css'

const imgBk = {
  background: `linear-gradient(0deg, rgba(9,21,64,0.682492980102197) 0%, rgba(9,21,64,0.6852941005503764) 100%), url(${stock});`,
  backgroundSize: 'cover',
  backgroundPosition: "center",
  width: '100vw'
}

const bounce = keyframes `
  0%{transform: translateY(-25px)}
  50%{transform: translateY(0px)}
  100%{transform: translateY(-25px)}
`

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1280px)")
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)")
 
  const bkImg = isLargerThan1200 ? `url(${teamDesktop})` : isLargerThan480 ? `linear-gradient(270deg, rgba(36,155,171,0) 0%, rgba(36,155,171,0) 31.24%, #249BAB 90%), url(${teamTablet})` : `linear-gradient(184.08deg, rgba(9,21,64, 0.6), 100%, rgba(255,255,255,1), #091540 100%), url(${teamMobile})`
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
            </Box>
            <Box display={{base:"block", lg: "block"}} position="absolute" bottom={{base: "65px", md: "50px"}} right={{base: "0", md: "50px"}} animation={`${bounce} infinite 5s ease-in-out`} cursor="pointer">
              <ReactScroll>
                <Icon name="downArrow" />
              </ReactScroll>  
            </Box>
          </Box>
      </Box>
      <Box textStyle="section" as="section" id="what-we-do-home" minHeight="700px" position="relative" background="neutral.900">
        <Box textStyle="container" position="relative">
          <CarouselWhatWeDo />
        </Box>
      </Box>
      <Box as="section" >
          <BannerOurCustomers />
      </Box>
      <Box as="section" textStyle="section" background={bkImg} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center bottom" height={{base: "400px", md: "700px"}} width="100%" position="relative">
          <Box textStyle="container" height="100%">
              <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                <Heading textStyle="h2" color={{base: "#fff", md: "inherit"}}>
                  Meet the ASL team
                </Heading>
                <Text textStyle="p" marginBottom={12} color={{base: "#fff", md: "inherit"}} maxW={{base: "100%", lg:"70%"}}>
                  Come and meet the friendly faces who strive for excellence in everything they do
                </Text>
                <Button variant="outline" maxWidth="200px" onClick={() => navigate('/team')}>Learn more</Button> 
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
