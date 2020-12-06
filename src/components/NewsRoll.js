import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

// Load components
import Card from '../components/Cards/Cards.news'

class NewsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
  
    return (
      <div>
        {posts &&
          posts.map((post, index) => {
           return (
              <Link to={posts[index].node.fields.slug} key={posts[index].node.id}>
                <Card 
                    key={posts[index].node.id}
                    title={posts[index].node.frontmatter.title} 
                    body={posts[index].node.excerpt}
                    date={posts[index].node.frontmatter.date}
                />
            </Link>
           )
        })}
      </div>
    )
  }
}

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-article" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <NewsRoll data={data} count={count} />}
  />
)