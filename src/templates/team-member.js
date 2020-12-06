import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const TeamMemberTemplate = ({
  name,
  jobtitle,
  linkedin
}) => {

  return (
    <section>
      <h1>
        {name}
      </h1>
      <p>{jobtitle}</p>
      <p>{linkedin}</p>
    </section>
  )
}

TeamMemberTemplate.propTypes = {
  name: PropTypes.string,
}

const TeamMember = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TeamMemberTemplate
        name={post.frontmatter.name}
        jobtitle={post.frontmatter.jobtitle}
        linkedin={post.frontmatter.linkedin}
      />
    </Layout>
  )
}

TeamMember.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TeamMember

export const pageQuery = graphql`
  query TeamMemberByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        name,
        jobtitle,
        linkedin
      }
    }
  }
`
