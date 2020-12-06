import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

// Load components
import Card from '../components/Cards/Cards.team'

class TeamRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
  
    return (
      <div>
        {posts &&
          posts.map((post, index) => {
           return (
              <Card 
                  key={posts[index].node.id}
                  name={posts[index].node.frontmatter.name} 
              />
           )
        })}
      </div>
    )
  }
}

TeamRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TeamRollQuery {
        allMarkdownRemark(
          sort: { order: DESC }
          filter: { frontmatter: { templateKey: { eq: "team-member" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TeamRoll data={data} count={count} />}
  />
)