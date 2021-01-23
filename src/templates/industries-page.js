import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
//import { useTransition, animated } from 'react-spring'


// Load components
import { Box, Heading, Text, Link, useMediaQuery } from '@chakra-ui/react'
import SliderItems from '../components/Slider/SlideItems'
import PreviewImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'

/**
 * @todo Animate scroll text
 *  
 */
// const TextAnimate = () => {
//   const [items, set] = useState(['Nuclear', 'Nuclear 1', 'Nuclear 2'])
//   const transitions = useTransition(items, item => item.key, {
//   from: { transform: 'translateX(0)', color: "#111" },
//   enter: { transform: 'translateX(50%)', color: "#fff" },
//   leave: { transform: 'translateX(100%)', color: "#111"},
//   })

//   console.log(transitions)
//     return transitions.map(({ item, props, key }) =>
//       <>
//       {console.log(item.text)}
//       <animated.div key={key} style={props}>{item}</animated.div>
//       </>
//     )
// }


export const IndustryPageTemplate = ({ title, content, contentComponent, subtitle, intro, imgHeader, testimonial, industries }) => {
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
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}}>
                <Heading as="h1" textStyle="h1" width={{base: "100%", lg:"65%"}} marginBottom="40px">
                    {subtitle}
                </Heading>
                <Text textStyle="p" width={{base: "100%", lg:"35%"}}>
                    {intro}
                </Text>
              </Box>
          </Box>
        </Box>
        <Box position="relative">
            <PreviewImage imageInfo={imgHeader} />
        </Box>
      </Box>

      <Box as="section" textStyle="section">
        <Box display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}} alignContent="flex-start" textStyle="container"> 
          <Box width={{base: "100%", lg:"48%"}} marginBottom={{base: "25px", lg: "0"}}>
            <MDXWrapper>
              <PageContent content={content} />
            </MDXWrapper>
          </Box>
          <Box width={{base: "100%", lg:"48%"}}>
            <Box backgroundColor="blue.900" padding="8">
              <Text textStyle="p" color="#fff">
                {testimonial.quote}
              </Text>
              <Text fontSize="16px" marginTop="20px" color="#fff">
                {testimonial.name}
              </Text>
            </Box>
            <Text textStyle="p" marginTop="20px">
              We open our arms and welcome any enquiry no matter what industry you’re in. If you would like to send an enquiry, simply email <Link href="mailto:enquiry@assembly-solutions.com" color="green.900" isExternal>enquiry@assembly-solutions.com</Link> and we will be right back to you.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box as="section" position="relative" width="100%" overflow="hidden" maxHeight="700px" margin={{base:"30px 0", lg: "50px 0"}}>
        <CarouselProvider totalSlides={industries.length} visibleSlides={isLargerThan760 ? 3 : 2} naturalSlideWidth={200} isPlaying={true} playDirection="forward" interval={3000} naturalSlideHeight={400} infinite={true}>
        <Slider>
          {industries.map((item, index) => {
            return (
              <Slide index={index}>
                <Box padding="0 5px" height="100%" maxHeight="700px" position="relative">
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

      <Box as="section" position="relative" width="100%" overflow="hidden">
        <SliderItems title="Latest News" />
      </Box>
    </Fragment>
  )
}

IndustryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndustryPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { seo } = post.frontmatter
  const title = seo ? seo.title : post.frontmatter.title
  const description = seo ? seo.description : undefined

  return (
    <Layout metaTitle={title} metaDescription={description}>
      <IndustryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        intro={post.frontmatter.intro}
        industries={post.frontmatter.industries || []}
        testimonial={post.frontmatter.testimonial || {}}
        content={post.html}
        imgHeader={post.frontmatter.image}
      />
    </Layout>
  )
}

IndustryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndustryPage

export const industryPageQuery = graphql`
  query IndustryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        subtitle,
        intro,
        seo {
          title 
          description
        }
        testimonial {
          name,
          quote
        }
        industries {
          name,
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
  }
`
