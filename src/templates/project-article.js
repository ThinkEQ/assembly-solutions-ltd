import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link as ReachLink } from 'gatsby'

// Load components
import Layout from '../components/Layout'
import BannerLearnMore from '../components/Banners/BannerLearnMore/BannerLearnMore'
import Testimonial from '../components/Testimonial/Testimonial'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent, MDXWrapper } from '../components/Content'
import { Box, Heading, Link } from '@chakra-ui/react'

const ProjectArticleTemplate = ({
  contentComponent,
  title,
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
          <Heading as="h1" textStyle="h2" width={{base: "100%", lg:"80%"}} >
            {title}
          </Heading>
        </Box>
      </Box>
      <Box as="section" textStyle="section" paddingTop="0 !important" backgroundColor="neutral.900">
        <Box textStyle="container">
          <Box marginBottom="50px">
            <PreviewCompatibleImage imageInfo={img} />
          </Box>
         
          {/**Main body content */}
          <Box maxW={{base: "100%", lg: "60%"}} margin="0 auto">
            <MDXWrapper>
                <CMSContent content={content} /> 
            </MDXWrapper>
            
            {/**Feature image + testimonial */}
            {feature && 
              <Box display="flex" flexDir="column" justifyContent="space-between" margin="20px 0" padding="30px 0">
                <Box width="100%">
                  <PreviewCompatibleImage imageInfo={feature.image} />
                </Box>
                <Box width="100%" display="flex" marginTop="20px">
                  <Testimonial author={feature.name} quote={feature.quote} />
                </Box>
              </Box>}
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
    <Layout metaTitle={title} metaDescription={description} ogUrl={post.frontmatter.seo.og_url} ogImg={post.frontmatter.image.relativePath}>
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
          og_url
        }
        projectfeature {
          name
          quote
          image {
            childImageSharp {
              fluid(maxHeight: 383, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                presentationHeight
              }
            }
          }
        }
        image {
          relativePath
          childImageSharp {
            fluid(maxHeight: 480, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              presentationHeight
            }
          }
        }
      }
    }
  }
`