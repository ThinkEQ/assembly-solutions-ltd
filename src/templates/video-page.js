import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const VideoPageTemplate = ({ title }) => {

  return (
    <section>
        <h1>
            {title}
        </h1>
    </section>
  )
}

VideoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const VideoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <VideoPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

VideoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default VideoPage

export const videoageQuery = graphql`
  query VideoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title,
      }
    }
  }
`
