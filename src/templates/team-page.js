import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const TeamPageTemplate = ({ title }) => {

  return (
    <section>
        <h1>
            {title}
        </h1>
    </section>
  )
}

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TeamPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title,
      }
    }
  }
`
