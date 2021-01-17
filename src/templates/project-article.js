import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link as ReachLink } from 'gatsby'

// Load components
import Layout from '../components/Layout'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import Testimonial from '../components/Testimonial/Testimonial'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper, toHTML } from '../components/Content'
import { Box, Heading, Link } from '@chakra-ui/react'

export const ProjectArticleTemplate = ({
  contentComponent,
  title,
  intro,
  img,
  feature,
  content,
}) => {
  const CMSContent = contentComponent || Content
  
  return (
    <Fragment>
      <Box as="header" textStyle="section" >
        <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
          <Link as={ReachLink} to="/projects" display="inline-block" textStyle="p" marginBottom="20px" fontSize="22px">
            Back to all projects
          </Link>
          <Heading as="h1" textStyle="h1" width={{base: "100%", lg:"80%"}} >
            {title}
          </Heading>
        </Box>
      </Box>
      <Box as="section" paddingTop="0 !important" backgroundColor="neutral.900">
          <Box marginBottom="50px">
            <PreviewCompatibleImage imageInfo={img} />
          </Box>
          <Box textStyle="section">
            <Box textStyle="container">
              {/**Intro content */}
              <MDXWrapper>
                <CMSContent content={toHTML(intro)} />
              </MDXWrapper>

              {/**Feature image + testimonial */}
              {feature && 
                <Box display="flex" flexDirection={{base: "column", lg: "row"}} justifyContent="space-between" margin="20px 0" padding="30px 0">
                  <Box width={{base: "100%", lg: "48%"}}>
                    <PreviewCompatibleImage imageInfo={feature.image} />
                  </Box>
                  <Box width={{base: "100%", lg: "48%"}} display="flex" marginTop={{base: "20px", lg: "0"}}>
                    <Testimonial author={feature.name} quote={feature.quote} />
                  </Box>
                </Box>}
              
              {/**Main body content */}
              <MDXWrapper>
                <CMSContent content={content} />
              </MDXWrapper>
            </Box>       
        </Box>
      </Box>
      <BannerLearnMore />
    </Fragment>
  )
}

ProjectArticleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ProjectArticle = ({ data }) => {
  const { markdownRemark: post } = data
  const { seo } = post.frontmatter
  const title = seo ? seo.title : post.frontmatter.title
  const description = seo ? seo.description : undefined

  return (
    <Layout metaTitle={title} metaDescription={description}>
      <ProjectArticleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
        img={post.frontmatter.image}
        feature={post.frontmatter.projectfeature}
      />
    </Layout>
  )
}

ProjectArticle.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectArticle

export const pageQuery = graphql`
  query ProjectArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }, frontmatter: {templateKey: {eq: "project-article"}}) {
      id
      html
      frontmatter {
        title
        intro
        seo {
          title 
          description
        }
        projectfeature {
          name
          quote
          image {
            childImageSharp {
              fluid(maxHeight: 383, quality: 80) {
                ...GatsbyImageSharpFluid
                presentationHeight
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxHeight: 480, quality: 80) {
              ...GatsbyImageSharpFluid
              presentationHeight
            }
          }
        }
      }
    }
  }
`