import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const IndustryPageTemplate = ({ title, content, contentComponent, subtitle, intro }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
        <h1>
            {title}
        </h1>
        <h2>
            {subtitle}
        </h2>
        <p>
            {intro}
        </p>
        <PageContent className="content" content={content} />
    </section>
  )
}

IndustryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndustryPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndustryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        intro={post.frontmatter.intro}
        content={post.html}
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
        intro
      }
    }
  }
`
