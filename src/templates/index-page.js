import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

// Load components
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import Button from '../theme/button'
import Layout from '../components/Layout'

// Load asset
import stock from '../img/stock.jpg'
import DownArrow from '../img/arrowCircleDown.svg'

const imgBk = {
  background: `linear-gradient(0deg, rgba(9,21,64,0.682492980102197) 0%, rgba(9,21,64,0.6852941005503764) 100%), url(${stock});`,
  backgroundSize: 'cover'
}

export const IndexPageTemplate = ({
  image,
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
          <Box padding="50px" alignSelf="flex-end" cursor="pointer">
            <Image src={DownArrow} />
          </Box>
      </Box>
    </Box>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
